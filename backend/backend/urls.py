import django.contrib.admin
import django.urls
import django.conf

import users.urls
import users.views


urlpatterns = [
    django.urls.path('login/', users.views.UserLoginAPIView.as_view(), name='login'),
    django.urls.path('register/', users.views.UserRegisterAPIView.as_view(), name='register'),
    django.urls.path("logout/", users.views.UserLogoutAPIView.as_view(), name="logout"),

    django.urls.path("user/", django.urls.include(users.urls)),
    django.urls.path("admin/", django.contrib.admin.site.urls),
]
