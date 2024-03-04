from rest_framework import serializers

from .models import Author, Book, Format, Publisher

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = [ 'name', 'nationality' ]

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
        fields = [ 'name' ]

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Publisher
        fields = [ 'name' ]