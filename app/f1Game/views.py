from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

from .models import Score


def index(request):
    score_list = Score.objects.order_by('high_score')[0]
    list_of_scores = Score.objects.all()

    '''if request.method == 'POST':
        current_score = request.POST['current_score']
        current = Score(high_score=current_score)
        current.save()'''

    context = {
        'scores':score_list,
    }
    return render(request,'f1Game/f1Game.html', context)
