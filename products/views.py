from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import ProductForm
#Resource routing kuno
class ProductResource(TemplateView):
    def get(self, *args, **kwargs):
        return HttpResponse('ahhh')
    def post(self, request, *args, **kwargs):
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
        return HttpResponse('ahhh')
