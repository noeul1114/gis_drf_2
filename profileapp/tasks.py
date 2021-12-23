import time
from io import BytesIO

from PIL import Image
from celery import shared_task


@shared_task
def generate_thumbnail_celery_lag(input_image):
    time.sleep(10)

    img = Image.open(input_image)

    width, height = img.size
    ratio = height / width
    pixel = 250

    img = img.convert("RGB")
    img.thumbnail((pixel, round(ratio * pixel)))

    output = BytesIO()
    img.save(output, format='JPEG', quality=95)
    output.seek(0)

    return output
