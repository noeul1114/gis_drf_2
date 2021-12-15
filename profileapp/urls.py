from django.urls import path

from profileapp.views import ProfileCreateAPIView, ProfileCreateTemplateView, ProfileUpdateAPIView

app_name = 'profileapp'

urlpatterns = [
    path('create_template/', ProfileCreateTemplateView.as_view(), name='create_template'),

    path('', ProfileCreateAPIView.as_view(), name='create'),
    path('<int:pk>', ProfileUpdateAPIView.as_view(), name='update'),
]
