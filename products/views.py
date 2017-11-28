from .models import Product
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import ProductForm
from uploads.models import Upload
#Resource routing kuno
class ProductResource(TemplateView):
    def get(self, *args, **kwargs):
        return HttpResponse('ahhh')
    def post(self, request, *args, **kwargs):


        product_form = ProductForm(request.POST, request.FILES)

        if product_form.is_valid():

            product = product_form.save()
            images = request.FILES.getlist('file')

            for image in images:
                image_upload = Upload(file_name=image, product=product)
                image_upload.save()

            return HttpResponse('ahhh')
