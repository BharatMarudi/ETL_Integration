# Generated by Django 3.0.5 on 2020-04-07 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Steps',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(blank=True, max_length=30)),
                ('project_step', models.CharField(blank=True, max_length=30)),
                ('source', models.CharField(blank=True, max_length=30)),
                ('source_type_file', models.CharField(blank=True, max_length=30)),
                ('source_type_table1', models.CharField(blank=True, max_length=30)),
                ('source_type_table2', models.CharField(blank=True, max_length=30)),
                ('target', models.CharField(blank=True, max_length=30)),
                ('target_type_file', models.CharField(blank=True, max_length=30)),
                ('target_type_table1', models.CharField(blank=True, max_length=30)),
                ('target_type_table2', models.CharField(blank=True, max_length=30)),
                ('etl_job_list', models.CharField(blank=True, max_length=30)),
                ('etl_job_file', models.CharField(blank=True, max_length=30)),
            ],
        ),
    ]
