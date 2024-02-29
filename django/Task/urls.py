from django.urls import path
from .views import TaskListCreate, TaskRetrieveUpdateDestroy



task_list= TaskListCreate.as_view({
    'get':'list',
    #dont want this 
    'post': 'create',
})

task_detail = TaskListCreate.as_view({
    'get':'retrieve',
    #don't want this
    'put':'update',
    'patch':'partial_update',
    'delete':'destroy',
})

urlpatterns = [
    path('tasks/', task_list, name='task_list'),
    path('tasks/<int:pk>/', task_detail, name='task-detail'),
]
