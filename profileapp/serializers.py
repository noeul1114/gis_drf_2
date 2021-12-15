from rest_framework.serializers import ModelSerializer

from profileapp.models import Profile


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'nickname', 'image', 'message']
