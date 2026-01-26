from django.urls import re_path
from .consumers import PrivateChatConsumer

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_id>[0-9a-f-]+)/$', PrivateChatConsumer.as_asgi()),
]