from django.shortcuts import render
from rest_framework import viewsets
from .models import Task
# Create your views here.
from .serializers import TaskSerializer

class TaskListCreate(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskRetrieveUpdateDestroy(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer