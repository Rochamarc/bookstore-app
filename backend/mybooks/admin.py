from django.contrib import admin

from .models import Author, Book, Format, Publisher

admin.site.register(Author)
admin.site.register(Publisher)
admin.site.register(Book)
admin.site.register(Format)