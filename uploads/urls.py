from django.conf.urls import url

from .views import UploadResource

urlpatterns = [
    url(r'^$', UploadResource.as_view()),
]
