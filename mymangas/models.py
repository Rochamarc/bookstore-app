from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nationality = models.CharField(max_length=200, null=False)
    
    def __str__(self) -> str:
        return self.name

class Publisher(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)

    def __str__(self) -> str:
        return self.name
    
class Manga(models.Model):
    title = models.CharField(max_length=300, null=False)
    volumes = models.IntegerField(default=1, null=False)
    
    published_at = models.CharField(max_length=4, null=True)
    
    # author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)
    was_read = models.CharField(max_length=3)
    times_read = models.IntegerField(null=False, default=1, blank=False)

    ToBuyTypes = models.TextChoices('ToBuyTypes', 'Yes No Maybe')
    to_buy = models.CharField(blank=False, choices = ToBuyTypes.choices, max_length=5, default='No')

    def __str__(self) -> str:
        return self.title

class AuthorManga(models.Model):
    author = models.ForeignKey(Author, related_name='author', null=False, on_delete=models.CASCADE)
    manga = models.ForeignKey(Manga, related_name='manga', null=False, on_delete=models.CASCADE)
