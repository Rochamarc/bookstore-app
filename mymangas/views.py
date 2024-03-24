from rest_framework import viewsets

from .models import Author, Manga, Publisher, AuthorManga

from .serializers import AuthorSerializer, MangaSerializer, PublisherSerializer, AuthorMangaSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

class PublisherViewSet(viewsets.ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer

class AuthorMangaViewSet(viewsets.ModelViewSet):
    queryset = AuthorManga.objects.all()
    serializer_class = AuthorMangaSerializer