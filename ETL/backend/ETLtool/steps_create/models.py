from django.db import models

# Create your models here.
class Steps(models.Model):
    project_name = models.CharField(max_length=30,blank=True)
    project_step = models.CharField(max_length=30,blank=True)
    source = models.CharField(max_length=30,blank=True)
    source_type_file = models.CharField(max_length=30,blank=True)
    source_type_table1 = models.CharField(max_length=30,blank=True)
    source_type_table2 = models.CharField(max_length=30,blank=True)
    target = models.CharField(max_length=30,blank=True)
    target_type_file = models.CharField(max_length=30,blank=True)
    target_type_table1 = models.CharField(max_length=30,blank=True)
    target_type_table2 = models.CharField(max_length=30,blank=True)
    etl_job_list = models.CharField(max_length=30,blank=True)
    etl_job_file = models.CharField(max_length=30,blank=True)