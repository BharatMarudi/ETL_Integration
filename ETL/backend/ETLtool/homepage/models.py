from django.db import models

# Create your models here.
class Homepage(models.Model):
    project_name = models.CharField(max_length=30,blank=True)
    created_by = models.CharField(max_length=30,blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
   