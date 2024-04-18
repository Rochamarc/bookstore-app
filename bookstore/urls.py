"""bookstore URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from mybooks.views import AuthorViewSet, BookViewSet, BookGenreViewSet, BookLiteratureViewSet, ClassificationViewSet, FormatViewSet
from mybooks.views import LiteratureViewSet, PublisherViewSet, GenreViewSet, EditionViewSet, ToReadViewSet

from mymangas.views import MangaViewSet, AuthorMangaViewSet
from mymangas.views import PublisherViewSet as MangaPublisherViewSet
from mymangas.views import MangaAuthorViewSet

router = routers.DefaultRouter()

# Books
router.register(r'books/authors', AuthorViewSet)
router.register(r'books/books', BookViewSet)
router.register(r'books/classsifications', ClassificationViewSet)
router.register(r'books/formats', FormatViewSet)
router.register(r'books/literatures', LiteratureViewSet)
router.register(r'books/publishers', PublisherViewSet)
router.register(r'books/genres', GenreViewSet)
router.register(r'books/book-literatures', BookLiteratureViewSet)
router.register(r'books/book-genres', BookGenreViewSet)
router.register(r'books/editions', EditionViewSet)
router.register(r'books/to_read', ToReadViewSet)

# Mangas
router.register(r'manga/manga-authors', MangaAuthorViewSet)
router.register(r'manga/mangas', MangaViewSet)
router.register(r'manga/publishers', MangaPublisherViewSet)
router.register(r'manga/manga-author', AuthorMangaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]

urlpatterns += router.urls