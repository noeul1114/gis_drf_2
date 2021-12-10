from rest_framework import serializers


class NewModelSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=255)
    created_at = serializers.DateTimeField()
