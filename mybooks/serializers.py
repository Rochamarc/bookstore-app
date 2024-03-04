from rest_framework import serializers

from .models import Author, Book, Format, Publisher

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = [ 'name', 'nationality' ]

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = [ 'title', 'published_at', 'isbn', 'author', 'format', 'publisher', 'was_read' ]

class FormatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Format
        fields = [ 'name' ]

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Publisher
        fields = [ 'name' ]