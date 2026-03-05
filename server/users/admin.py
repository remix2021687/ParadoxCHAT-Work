from django.contrib import admin
from .models import CustomUser, Profile, Connect, VerificationRequest, Notification

admin.site.register([CustomUser, Profile, Connect, VerificationRequest, Notification])


class UserAdmin(admin.ModelAdmin):
    fields = ('email', 'first_name', 'last_name')
    list_display = ('email', 'first_name', 'last_name')
