from rest_framework import serializers

from .models import Author, Book, BookGenre, Classification, Format, Literature, BookLiterature, Publisher, Genre, Edition

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    books = serializers.StringRelatedField(many=True)

    class Meta:
        model = Author
        fields = "__all__"

class BookSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.name')
    author_nationality = serializers.ReadOnlyField(source='author.nationality')

    book_literatures = serializers.StringRelatedField(many=True)
    book_genres = serializers.StringRelatedField(many=True)

    class Meta:
        model = Book
        fields = "__all__"
        
class BookLiteratureSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BookLiterature
        fields = "__all__"

class BookGenreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BookGenre 
        fields = "__all__"

class ClassificationSerializer(serializers.HyperlinkedModelSerializer):
    book_name = serializers.ReadOnlyField(source='book.title')

    class Meta:
        model = Classification
        fields = "__all__"

class EditionSerializer(serializers.HyperlinkedModelSerializer):
    book = serializers.ReadOnlyField(source='book.title')
    format = serializers.ReadOnlyField(source='format.name')
    publisher = serializers.ReadOnlyField(source='publisher.name')

    class Meta:
        model = Edition
        fields = "__all__"

class FormatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Format
        fields = "__all__"

class LiteratureSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Literature
        fields = "__all__"

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Publisher
        fields = "__all__"

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"