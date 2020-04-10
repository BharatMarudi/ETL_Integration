from django.conf.urls import url
from django.urls import path,include
from rest_framework import routers
from . import views

urlpatterns = [
    path('', views.HomepageList), #this will show StepsList --ikkadiki vachindi
    path('<int:pk>', views.HomepageDetail), #this will show the StepDetail
]