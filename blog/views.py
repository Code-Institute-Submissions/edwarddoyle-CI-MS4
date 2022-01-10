from django.shortcuts import render, get_object_or_404
from .models import Post


def all_posts(request):

    context = {
        'posts': Post.objects.filter(status=1).order_by('-created')
    }

    return render(request, "blog/blog.html", context)


def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)

    context = {
        'post': post,
    }

    return render(request, "blog/blog_detail.html", context)
