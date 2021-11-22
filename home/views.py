from django.shortcuts import render


def index(request):
    return render(request, "home/index.html")


def privacy_view(request):
    return render(request, "home/privacy.html")


def terms_view(request):
    return render(request, "home/terms.html")


def contact_view(request):
    return render(request, "home/contact.html")
