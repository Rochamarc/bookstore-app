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
    
class Book(models.Model):
    title = models.CharField(max_length=300, null=False)
    published_at = models.CharField(max_length=4, null=True)
    isbn = models.CharField(max_length=20, null=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    format = models.ForeignKey(Format, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, null=True)
    was_read = models.CharField(max_length=3)

    ToBuyTypes = models.TextChoices('ToBuyTypes', 'Yes No Maybe')
    to_buy = models.CharField(blank=False, choices = ToBuyTypes.choices, max_length=5, default='No')

    def __str__(self) -> str:
        return self.title


class Classification(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    ClassificationTypes = models.TextChoices('ClassificationTypes', 'GREAT GOOD MODERATE BAD HORRIBLE')
    value = models.CharField(blank=False, choices=ClassificationTypes.choices, max_length=10)

    def __str__(self) -> str:
        return self.book.title