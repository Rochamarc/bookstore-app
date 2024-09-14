from rest_framework import viewsets

from .models import MangaAuthor, Manga, Publisher, AuthorManga

from .serializers import MangaAuthorSerializer, MangaSerializer, PublisherSerializer, AuthorMangaSerializer

class MangaAuthorViewSet(viewsets.ModelViewSet):
    queryset = MangaAuthor.objects.all()
    serializer_class = MangaAuthorSerializer

class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

class PublisherViewSet(viewsets.ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer

class AuthorMangaViewSet(viewsets.ModelViewSet):
    queryset = AuthorManga.objects.all()
    serializer_class = AuthorMangaSerializer