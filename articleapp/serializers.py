from rest_framework.serializers import ModelSerializer

from articleapp.models import Article


class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'image', 'content', 'thumb', 'created_at']
        read_only_fields = ['thumb', 'created_at']
