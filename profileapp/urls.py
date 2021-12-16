from django.urls import path

from profileapp.views import ProfileCreateAPIView, ProfileCreateTemplateView, ProfileRetrieveUpdateAPIView, \
    ProfileUpdateTemplateView

app_name = 'profileapp'

urlpatterns = [
    path('create_template/', ProfileCreateTemplateView.as_view(), name='create_template'),
    path('', ProfileCreateAPIView.as_view(), name='create'),

    path('update_template/<int:pk>', ProfileUpdateTemplateView.as_view(), name='update_template'),
    path('<int:pk>', ProfileRetrieveUpdateAPIView.as_view(), name='update'),
]
