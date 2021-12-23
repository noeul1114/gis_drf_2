import sys
from io import BytesIO

from PIL import Image
from django.contrib.auth.models import User
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models

# Create your models here.
from django.db.models.signals import post_save
from django.dispatch import receiver

from image_processing import thumbnail
from profileapp.tasks import generate_thumbnail_celery_lag


class Profile(models.Model):
    owner = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)

    nickname = models.CharField(max_length=50, null=False)
    image = models.ImageField(upload_to='profile/', null=True, blank=True)
    thumb = models.ImageField(upload_to='profile/thumbnail/', null=True)
    message = models.CharField(max_length=255, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)


@receiver(post_save, sender=Profile)
def async_generate_thumbnail(sender, instance=None, created=False, **kwargs):
    generate_thumbnail_celery_lag.delay(instance.pk)
