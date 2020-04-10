from django.conf.urls import url
from django.urls import path,include
from rest_framework import routers
from . import views

urlpatterns = [
#    url(r'^$',views.StepsList),
 #   url(r'^P<pk>[0-9]$',views.StepDetail),
    path('', views.StepsList),
    path('<int:pk>', views.StepDetail),
]