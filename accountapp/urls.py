from django.urls import path
from django.views.generic import TemplateView
from rest_framework.authtoken import views

from accountapp.views import hello_world, hello_world_template, AccountCreateTemplate, AccountCreateAPIView, \
    AccountLoginView, AccountRetrieveAPIView, AccountRetrieveTemplateView

app_name = 'accountapp'

urlpatterns = [
    # UI를 보기 위한 부분
    path('hello_world_template/', hello_world_template, name='hello_world_template'),
    # 로직 처리 위한 부분
    path('hello_world/', hello_world, name='hello_world'),


    path('login_template/', AccountLoginView, name='login_template'),
    path('login/', views.obtain_auth_token, name='login'),

    path('logout_template/', TemplateView.as_view(template_name='accountapp/logout.html'), name='logout'),


    path('create_template/', AccountCreateTemplate, name='create_template'),
    path('create/', AccountCreateAPIView.as_view(), name='create'),

    path('retrieve_template/<int:pk>', AccountRetrieveTemplateView.as_view(), name='retrieve_template'),
    path('retrieve/<int:pk>', AccountRetrieveAPIView.as_view(), name='retrieve'),


]