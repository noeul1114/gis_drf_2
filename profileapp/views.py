from django.shortcuts import render

# Create your views here.
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from profileapp.models import Profile
from profileapp.serializers import ProfileSerializer


class ProfileCreateAPIView(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]