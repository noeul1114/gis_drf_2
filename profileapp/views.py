from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated

from profileapp.models import Profile
from profileapp.permissions import IsProfileOwner
from profileapp.serializers import ProfileSerializer


class ProfileCreateTemplateView(TemplateView):
    template_name = 'profileapp/create.html'


class ProfileCreateAPIView(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProfileUpdateTemplateView(TemplateView):
    template_name = 'profileapp/update.html'


class ProfileUpdateAPIView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    permission_classes = [IsProfileOwner]
    authentication_classes = [TokenAuthentication]
