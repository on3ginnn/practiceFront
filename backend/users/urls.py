from django.urls import path
import users.views


app_name = "users"

urlpatterns = [
    # path('all/', users.views.UserListAPIView.as_view(), name='list'),
    path('profile/', users.views.UserProfileAPIView.as_view(), name='profile'),
    # path('<int:pk>/', users.views.UserDetailUpdateDeleteAPIView.as_view(), name='concrete'),
]