from django.db import models

class Titles(models.Model):
    title = models.CharField(max_length=20)
