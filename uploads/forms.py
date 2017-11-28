from django import forms
from .models import Upload

class UploadForm(forms.ModelForm):
    file_name = forms.FileField()
    class Meta:
        model = Upload
        fields = ['file_name']
