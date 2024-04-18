from django.db import models

class MangaAuthor(models.Model):
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
    
class Manga(models.Model):
    title = models.CharField(max_length=300, null=False)
    volumes = models.IntegerField(default=1, null=False)
    
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    published_at = models.CharField(max_length=4, null=True)
    
    volumes_read = models.IntegerField(null=True)
    times_read = models.IntegerField(null=False, default=1, blank=False)

    ToBuyTypes = models.TextChoices('ToBuyTypes', 'Yes No Maybe')
    to_buy = models.CharField(blank=False, choices = ToBuyTypes.choices, max_length=5, default='No')

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        # Creates a default value for volumes_read as the number of volumes
        if not self.volumes_read:
            self.volumes_read = self.volumes
        super(Manga, self).save(*args, **kwargs)

class AuthorManga(models.Model):
    author = models.ForeignKey(MangaAuthor, related_name='manga', null=False, on_delete=models.CASCADE)
    manga = models.ForeignKey(Manga, related_name='author', null=False, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.author.name