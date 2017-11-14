from django.shortcuts import render

# Create your views here.
def index(request):

    context = {
        'hello': 'greets'
    }
    template_name = 'index.html'
    return render(request, template_name, context)
