from django.db import models

from django.db.models.functions import Lower

class Author(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nationality = models.CharField(max_length=200, null=False)
    
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name

class Publisher(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name

class Format(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name   

class Literature(models.Model):
    value = models.CharField(max_length=200, null=False, unique=True)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.value} LITERATURE'

class Book(models.Model):
    title = models.CharField(max_length=300, null=False)
    published_at = models.CharField(max_length=4, null=True)
    author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)
    was_read = models.CharField(max_length=3)
    times_read = models.IntegerField(null=False, default=1, blank=False)

    ToBuyTypes = models.TextChoices('ToBuyTypes', 'Yes No Maybe')
    to_buy = models.CharField(blank=False, choices = ToBuyTypes.choices, max_length=5, default='No')

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

class Edition(models.Model):
    isbn = models.CharField(max_length=20, null=True)
    format = models.ForeignKey(Format, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, null=True)
    pages = models.IntegerField(null=False, default=1)
    
    book = models.ForeignKey(Book, related_name='book_editions' ,on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.publisher} :: {self.format}' 

class BookLiterature(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='book_literatures', null=False)
    literature = models.ForeignKey(Literature, on_delete=models.CASCADE, null=False)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        # alter the models foreign key
        # unique_together = [['book', 'literature']]
        constraints = [
            models.UniqueConstraint(
                Lower('book'),
                Lower('literature'),
                name='unique-book-literature'
            ),
        ]

    def __str__(self) -> str:
        return f"{self.literature.value} LITERATURE" 

class Classification(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    ClassificationTypes = models.TextChoices('ClassificationTypes', 'GREAT GOOD MODERATE BAD HORRIBLE')
    value = models.CharField(blank=False, choices=ClassificationTypes.choices, max_length=10)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.book.title

class Genre(models.Model):
    genre = models.CharField(blank=False, null=False, max_length=30, unique=True)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.genre

class BookGenre(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='book_genres', null=False)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, null=False)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.genre.genre
    
class ToRead(models.Model):
    year = models.CharField(max_length=4, null=False)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='books', null=False)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"To Read {self.book} in {self.year}"