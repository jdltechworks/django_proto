from django import forms
from .models import Product
class ProductForm(forms.ModelForm):
    title = forms.CharField(max_length=50)
    price = forms.FloatField()
    description = forms.CharField()

    class Meta:
        model = Product
        fields = ['title', 'price', 'description']
