from django.contrib import admin
from .models import Post, Comment

admin.site.register(Post)
admin.site.register(Comment)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'body', 'post', 'created', 'active',
                    'image', 'image_url')
    list_filter = ('active', 'created')
    search_fields = ('name', 'email', 'body')
    actions = ['approve_comments']

    def approve_comments(self, queryset):
        queryset.update(active=True)
