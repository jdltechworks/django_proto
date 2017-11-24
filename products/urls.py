from django.conf.urls import url

from .views import ProductResource

urlpatterns = [
    url(r'^$', ProductResource.as_view()),
]
