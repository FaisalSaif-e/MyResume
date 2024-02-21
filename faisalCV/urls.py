from django.contrib import admin
from django.urls import path
from faisalCV import views

urlpatterns = [
    path('', views.home, name="home"),
    path('about', views.about, name="about"),
    path('contact', views.contact, name="contact"),
    path('portfolio', views.portfolio, name="portfolio"),
    path('services', views.services, name="services"),
    path('skills', views.skills, name="skills")
]