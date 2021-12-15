from django.urls import path

from profileapp.views import ProfileCreateAPIView

urlpatterns = [
    path('', ProfileCreateAPIView.as_view(), name='create'),
]
