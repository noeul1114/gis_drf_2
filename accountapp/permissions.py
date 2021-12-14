from django.contrib.auth.models import User
from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj == request.user
