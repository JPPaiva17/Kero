from django.shortcuts import render, HttpResponse


def homeView(request):
    return render(request, 'home.html')

def loginView(request):
    return render(request, 'registration/login.html')