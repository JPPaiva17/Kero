from django.contrib import admin
from django.contrib.auth import login
from django.urls import path, include
from .views import homeView, loginView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homeView),
    path('login/', loginView, name='login-view'),
]
