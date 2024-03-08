from rest_framework import serializers

from .models import Author, Book, BookGenre, Classification, Format, Literature, BookLiterature, Publisher, Genre

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    books = serializers.StringRelatedField(many=True)

    class Meta:
        model = Author
        fields = "__all__"

class BookSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.name')
    author_nationality = serializers.ReadOnlyField(source='author.nationality')
    publisher_name = serializers.ReadOnlyField(source='publisher.name')
    format_name = serializers.ReadOnlyField(source='format.name')

    book_literatures = serializers.StringRelatedField(many=True)

    class Meta:
        model = Book
        fields = "__all__" 
        # [ 'title', 'published_at', 'isbn', 'author', 'format', 'publisher', 'was_read', 'author_name' ]

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