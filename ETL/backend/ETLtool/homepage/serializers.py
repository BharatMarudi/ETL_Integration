from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Homepage

class HomepageModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Homepage
        fields = (
            'id',
            'project_name',
            'created_by',
            'created_date',
            )


