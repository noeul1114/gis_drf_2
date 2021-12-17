from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from articleapp.models import Article
from articleapp.serializers import ArticleSerializer


class ArticleCreateTemplateView(TemplateView):
    template_name = 'articleapp/create.html'


class ArticleCreateAPIView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

