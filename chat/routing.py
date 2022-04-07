# eli5: routing == urls, consumers == views

# relative path mechanism:
from django.urls import re_path

from . import consumers

# .as_asgi() is the now required since channels 3.0
websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/$',
            consumers.ChatRoomConsumer.as_asgi()),
]
