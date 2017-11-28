from django.db import models
from products.models import Product
# Create your models here.
class Upload(models.Model):
    file_name = models.FileField(upload_to="products")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='files')
