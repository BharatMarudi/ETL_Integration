# Generated by Django 3.0.5 on 2020-04-07 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('steps_create', '0002_auto_20200407_1341'),
    ]

    operations = [
        migrations.AddField(
            model_name='steps',
            name='etl_job_file',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='etl_job_list',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='project_name',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='source_type_file',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='source_type_table1',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='source_type_table2',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='target_type_file',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='target_type_table1',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='steps',
            name='target_type_table2',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
