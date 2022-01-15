from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

from .models import Score


def index(request):
    return render(request,'f1Game/f1Game.html')
