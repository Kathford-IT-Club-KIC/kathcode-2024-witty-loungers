from django.urls import path

from bewell.views import home

app_name = "bewell"
urlpatterns = [
    path('',home,name='home')
]
