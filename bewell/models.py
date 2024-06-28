from django.db import models
from django_quill.fields import QuillField

class Exercise(models.Model):
    blog = QuillField()
    age = models.DecimalField(max_digits=3, decimal_places=0)
    gender = models.CharField(max_length=255)
    height = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return str(self.age)
