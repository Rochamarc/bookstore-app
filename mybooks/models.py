from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=200, null=False)
    nationality = models.CharField(max_length=200, null=False)
    
    def __str__(self) -> str:
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=200, null=False)

    def __str__(self) -> str:
        return self.name


class Format(models.Model):
    name = models.CharField(max_length=100, null=False)
    
    def __str__(self) -> str:
        return self.name
    

class Literature(models.Model):
    value = models.CharField(max_length=200, null=False, unique=True)

    def __str__(self) -> str:
        return f'{self.value} LITERATURE'

class Book(models.Model):
    title = models.CharField(max_length=300, null=False)
    published_at = models.CharField(max_length=4, null=True)
    isbn = models.CharField(max_length=20, null=True)
    author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)
    format = models.ForeignKey(Format, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, null=True)
    was_read = models.CharField(max_length=3)

    ToBuyTypes = models.TextChoices('ToBuyTypes', 'Yes No Maybe')
    to_buy = models.CharField(blank=False, choices = ToBuyTypes.choices, max_length=5, default='No')

    # literature = models.ForeignKey(BookLiterature, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title

class BookLiterature(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='book_literatures', null=False)
    literature = models.ForeignKey(Literature, on_delete=models.CASCADE, null=False)
    
    class Meta:
        unique_together = ['book', 'literature']

    def __str__(self) -> str:
        return f"{self.literature.value} LITERATURE" 

class Classification(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    ClassificationTypes = models.TextChoices('ClassificationTypes', 'GREAT GOOD MODERATE BAD HORRIBLE')
    value = models.CharField(blank=False, choices=ClassificationTypes.choices, max_length=10)

    def __str__(self) -> str:
        return self.book.title

# Nao sei se vou manter esse padrão
# talvez fosse o caso de se criar esse modelo de generos
# e um outro modelo que recebe duas foreign keys. O mesmo se aplica para o classification.
# essa prática também vai facilitar caso eu resolva inserir um sistema de usuarios onde 
# cada um recebe uma classificação por livro
class Genre(models.Model):
    # GenreTypes = models.TextChoices('GenreTypes', 'Horror Fiction NonFiction Thriller Fantasy Romance Poetry Philosophy Biography History Travel') 
    # book = models.ForeignKey(Book, on_delete=models.CASCADE)
    genre = models.CharField(blank=False, null=False, max_length=30, unique=True)

    def __str__(self) -> str:
        return self.genre

class BookGenre(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='book_genres', null=False)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, null=False)

    def __str__(self) -> str:
        return self.genre.genre