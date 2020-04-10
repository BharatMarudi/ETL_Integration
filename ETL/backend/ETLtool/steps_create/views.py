from django.shortcuts import render
from .serializers import StepsModelSerializer
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.http import HttpResponse
from .models import Steps
from django.views.decorators.csrf import csrf_exempt

#class addProjectStepsViewSet(viewsets.ModelViewSet):

#APIS
#/viewsteps/

@csrf_exempt
def StepsList(request):
    #GET ALL
    if request.method == 'GET':
        steps = Steps.objects.all()
        steps_serializer = StepsModelSerializer(steps, many=True)
        return JsonResponse(steps_serializer.data, safe=False)

    #ADD ONE
    if request.method == 'POST':
        steps_data = JSONParser().parse(request)
        addstep_serializer = StepsModelSerializer(data=steps_data)
        if addstep_serializer.is_valid():
            addstep_serializer.save()
            return JsonResponse(addstep_serializer.data, status=201)
        return JsonResponse(addstep_serializer.errors, status=400)

    if request.method == 'DELETE':
        Steps.objects.all().delete()
        return HttpResponse(status=204)

@csrf_exempt
def StepDetail(request, pk):
    try:
        step = Steps.objects.get(pk=pk)
    except step.DoesNotExist :
        return HttpResponse(status = 404)
    
    #Retrive one
    if request.method == 'GET':
        step_serializer = StepsModelSerializer(step)
        return JsonResponse(step_serializer.data,safe=False)
    
    #Udate one record
    if request.method == 'PUT':
        step_data = JSONParser().parse(request)
        step_serializer =  StepsModelSerializer(step, data=step_data)
        if step_serializer.is_valid():
            step_serializer.save()
            return JsonResponse(step_serializer.data, safe=False)
        return JsonResponse(step_serializer.errors, status = 400)

    if request.method == 'DELETE':
        step.delete()
        return HttpResponse(status=204)  
    
