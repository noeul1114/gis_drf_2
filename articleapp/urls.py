from django.urls import path

from articleapp.views import ArticleCreateAPIView, ArticleCreateTemplateView, ArticleRUDAPIView, \
    ArticleRetrieveTemplateView

app_name = 'articleapp'

urlpatterns = [
    path('create_template/', ArticleCreateTemplateView.as_view(), name='create_template'),
    path('', ArticleCreateAPIView.as_view(), name='create'),

    path('retrieve_template/<int:pk>', ArticleRetrieveTemplateView.as_view(), name='retrieve_template'),
    path('<int:pk>', ArticleRUDAPIView.as_view(), name='RUD'),
]