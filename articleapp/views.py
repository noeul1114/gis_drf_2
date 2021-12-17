from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from articleapp.models import Article
from articleapp.permissions import IsArticleOwner
from articleapp.serializers import ArticleSerializer


class ArticleCreateTemplateView(TemplateView):
    template_name = 'articleapp/create.html'


class ArticleCreateAPIView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]


class ArticleRetrieveTemplateView(TemplateView):
    template_name = 'articleapp/retrieve.html'


class ArticleUpdateTemplateView(TemplateView):
    template_name = 'articleapp/update.html'


class ArticleDestroyTemplateView(TemplateView):
    template_name = 'articleapp/destroy.html'


class ArticleRUDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    permission_classes = [IsArticleOwner]
    authentication_classes = [TokenAuthentication]

    def perform_update(self, serializer):
        serializer.save(writer=self.request.user)

