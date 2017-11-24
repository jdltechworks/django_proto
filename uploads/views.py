from django.http import HttpResponse
from django.views.generic import TemplateView

#Resource routing kuno
class UploadResource(TemplateView):
    def get(self, *args, **kwargs):
        return HttpResponse('ahhh')
    def post(self, request, *args, **kwargs):
        print(request.POST)
        return HttpResponse('ahhh')
