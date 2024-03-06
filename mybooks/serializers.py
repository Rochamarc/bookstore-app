from rest_framework import serializers

from .models import Author, Book, Format, Publisher

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"

class BookSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.name')
    author_nationality = serializers.ReadOnlyField(source='author.nationality')
    publisher_name = serializers.ReadOnlyField(source='publisher.name')
    format_name = serializers.ReadOnlyField(source='format.name')
    
    class Meta:
        model = Book
        fields = "__all__" 
        # [ 'title', 'published_at', 'isbn', 'author', 'format', 'publisher', 'was_read', 'author_name' ]

class FormatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Format
        fields = "__all__"

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Publisher
        fields = "__all__"