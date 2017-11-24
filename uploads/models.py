from django.db import models
from products.models import Product
# Create your models here.
class Upload(models.Model):
    file_name = models.FileField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
