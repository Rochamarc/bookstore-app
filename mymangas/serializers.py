from rest_framework import serializers

from .models import MangaAuthor, Manga, Publisher, AuthorManga

class AuthorMangaSerializer(serializers.HyperlinkedModelSerializer):
    """ Manga & Author relationship serializer """

    author_name = serializers.ReadOnlyField(source='author.name')
    manga_name = serializers.ReadOnlyField(source='manga.title')
    
    class Meta:
        model = AuthorManga
        fields = "__all__"

class MangaAuthorSerializer(serializers.HyperlinkedModelSerializer):
    """ Author Serializer """
    
    class Meta:
        model = MangaAuthor
        fields = "__all__"

class MangaSerializer(serializers.HyperlinkedModelSerializer):
    publisher_name = serializers.ReadOnlyField(source='publisher.name')
    author = serializers.StringRelatedField(many=True)

    class Meta:
        model = Manga
        fields = "__all__"

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Publisher
        fields = "__all__"