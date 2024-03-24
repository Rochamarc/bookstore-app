from rest_framework import serializers

from .models import Author, Manga, Publisher, AuthorManga

class AuthorMangaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AuthorManga
        fields = "__all__"

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"

class MangaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Manga
        fields = "__all__"

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Publisher
        fields = "__all__"