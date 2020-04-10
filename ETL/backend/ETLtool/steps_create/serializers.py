from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Steps

class StepsModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Steps
        fields = (
            'id',
            'project_name',
            'project_step',
            'source',
            'source_type_file',
            'source_type_table1',
            'source_type_table2',
            'target',
            'target_type_file',
            'target_type_table1',
            'target_type_table2',
            'etl_job_list',
            'etl_job_file',
            )


