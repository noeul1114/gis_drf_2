from django.urls import path
from rest_framework.authtoken import views

from accountapp.views import hello_world, hello_world_template, AccountCreateTemplate, AccountCreateAPIView

app_name = 'accountapp'

urlpatterns = [
    # UI를 보기 위한 부분
    path('hello_world_template/', hello_world_template, name='hello_world_template'),
    # 로직 처리 위한 부분
    path('hello_world/', hello_world, name='hello_world'),


    path('login/', views.obtain_auth_token, name='login'),


    path('create_template/', AccountCreateTemplate, name='create_template'),

    path('create/', AccountCreateAPIView.as_view(), name='create'),

]