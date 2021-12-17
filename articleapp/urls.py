from django.urls import path

from articleapp.views import ArticleCreateAPIView

app_name = 'articleapp'

urlpatterns = [
    path('', ArticleCreateAPIView.as_view(), name='create'),
]