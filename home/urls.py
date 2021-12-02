from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('privacy/', views.privacy_view, name="privacy"),
    path('terms-and-conditions/', views.terms_view, name="terms"),
    path('contact/', views.contact_view, name="contact"),
]
