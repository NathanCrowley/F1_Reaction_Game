from django.db import models

# Create your models here.
class Score(models.Model):
    high_score = models.IntegerField()