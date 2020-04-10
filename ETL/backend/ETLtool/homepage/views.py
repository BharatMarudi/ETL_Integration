from django.shortcuts import render
from .serializers import HomepageModelSerializer
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.http import HttpResponse
from .models import Homepage
from django.views.decorators.csrf import csrf_exempt


#APIS


@csrf_exempt
def HomepageList(request): 
    #GET ALL
    if request.method == 'GET':
        projects = Homepage.objects.all()
        projects_serializer = HomepageModelSerializer(projects, many=True)
        return JsonResponse(projects_serializer.data, safe=False)

    #ADD ONE
    if request.method == 'POST':
        
        projects_data = JSONParser().parse(request)
        projects_data_serializer = HomepageModelSerializer(data=projects_data)
        if projects_data_serializer.is_valid():
            projects_data_serializer.save()
            return JsonResponse(projects_data_serializer.data, status=201)
        return JsonResponse(projects_data_serializer.errors, status=400)

    if request.method == 'DELETE':
        Homepage.objects.all().delete()
        return HttpResponse(status=204)

@csrf_exempt
def HomepageDetail(request, pk):
    try:
        project = Homepage.objects.get(pk=pk)
    except project.DoesNotExist :
        return HttpResponse(status = 404)
    
    #Retrive one
    if request.method == 'GET':
        project_serializer = HomepageModelSerializer(project)
        return JsonResponse(project_serializer.data,safe=False)
    
    #Udate one record
    if request.method == 'PUT':
        project_data = JSONParser().parse(request)
        project_serializer =  HomepageModelSerializer(project, data=project_data)
        if project_serializer.is_valid():
            project_serializer.save()
            return JsonResponse(project_serializer, safe=False)
        return JsonResponse(project_serializer, status = 400)
    # Delete record
    if request.method == 'DELETE':
        project.delete()
        return HttpResponse(status=204)  
    
