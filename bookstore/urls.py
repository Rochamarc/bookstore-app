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
from mybooks.views import AuthorViewSet, BookViewSet, BookGenreViewSet, BookLiteratureViewSet, ClassificationViewSet, FormatViewSet, LiteratureViewSet, PublisherViewSet, GenreViewSet, EditionViewSet

from mymangas.views import AuthorViewSet as MangaAuthorViewSet
from mymangas.views import MangaViewSet
from mymangas.views import PublisherViewSet as MangaPublisherViewSet


router = routers.DefaultRouter()

# My books routes
router.register(r'mybooks/authors', AuthorViewSet)
router.register(r'mybooks/books', BookViewSet)
router.register(r'mybooks/classsifications', ClassificationViewSet)
router.register(r'mybooks/formats', FormatViewSet)
router.register(r'mybooks/literatures', LiteratureViewSet)
router.register(r'mybooks/publishers', PublisherViewSet)
router.register(r'mybooks/genres', GenreViewSet)
router.register(r'mybooks/book-literatures', BookLiteratureViewSet)
router.register(r'mybooks/book-genres', BookGenreViewSet)
router.register(r'mybooks/editions', EditionViewSet)

# My manga routes
router.register(r'mymangas/authors', MangaAuthorViewSet)
router.register(r'mymangas/mangas', MangaViewSet)
router.register(r'mymangas/publishers', MangaPublisherViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]

urlpatterns += router.urls