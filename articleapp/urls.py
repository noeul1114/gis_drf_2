from django.urls import path

from articleapp.views import ArticleCreateAPIView, ArticleCreateTemplateView, ArticleRUDAPIView, \
    ArticleRetrieveTemplateView, ArticleUpdateTemplateView, ArticleDestroyTemplateView

app_name = 'articleapp'

urlpatterns = [
    path('create_template/', ArticleCreateTemplateView.as_view(), name='create_template'),
    path('', ArticleCreateAPIView.as_view(), name='create'),

    path('retrieve_template/<int:pk>', ArticleRetrieveTemplateView.as_view(), name='retrieve_template'),
    path('update_template/<int:pk>', ArticleUpdateTemplateView.as_view(), name='update_template'),
    path('destroy_template/<int:pk>', ArticleDestroyTemplateView.as_view(), name='destroy_template'),

    path('<int:pk>', ArticleRUDAPIView.as_view(), name='RUD'),
]