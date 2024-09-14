from .models import Author, Book, BookGenre, BookLiterature, Classification, Format, Literature, Publisher, Genre, Edition, ToRead

from rest_framework import viewsets

from .serializers import AuthorSerializer, BookSerializer, BookGenreSerializer, BookLiteratureSerializer
from .serializers import ClassificationSerializer, FormatSerializer, LiteratureSerializer 
from .serializers import PublisherSerializer, GenreSerializer, EditionSerializer, ToReadSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class ClassificationViewSet(viewsets.ModelViewSet):
    queryset = Classification.objects.all()
    serializer_class = ClassificationSerializer

class FormatViewSet(viewsets.ModelViewSet):
    queryset = Format.objects.all()
    serializer_class = FormatSerializer

class LiteratureViewSet(viewsets.ModelViewSet):
    queryset = Literature.objects.all()
    serializer_class = LiteratureSerializer
    
class PublisherViewSet(viewsets.ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class BookLiteratureViewSet(viewsets.ModelViewSet):
    queryset = BookLiterature.objects.all()
    serializer_class = BookLiteratureSerializer

class BookGenreViewSet(viewsets.ModelViewSet):
    queryset = BookGenre.objects.all()
    serializer_class = BookGenreSerializer

class EditionViewSet(viewsets.ModelViewSet):
    queryset = Edition.objects.all()
    serializer_class = EditionSerializer

class ToReadViewSet(viewsets.ModelViewSet):
    queryset = ToRead.objects.all()
    serializer_class = ToReadSerializer