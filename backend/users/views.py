from rest_framework.views import APIView
import rest_framework.generics
from rest_framework import status
from rest_framework.response import Response
import rest_framework.permissions
from rest_framework_simplejwt import views as jwt_views
from django.contrib.auth import get_user_model
from django.conf import settings
from django.utils.decorators import method_decorator

import users.serializer


class UserLogoutAPIView(APIView):
   def get(self, request):
        response = Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
        response.delete_cookie('access_token')  # Удаляем cookie
        return response
   

class UserRegisterAPIView(rest_framework.generics.CreateAPIView):
    serializer_class = users.serializer.UserCreateSerializer
    queryset = get_user_model().objects.all()


class UserLoginAPIView(jwt_views.TokenObtainPairView):

    # @method_decorator(users.utils.enforce_csrf)
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        access_token = response.data['access']
        response.set_cookie(
            key=settings.SIMPLE_JWT['AUTH_COOKIE'],  # Имя cookie
            value=access_token,  # Значение (access токен)
            httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],       # HTTP-only
            secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],       # Для HTTPS установите True
            samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],      # Политика SameSite
            expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],        # Время жизни cookie (в секундах)
        )
        
        del response.data['access']
        del response.data['refresh']

        return response

    
class UserProfileAPIView(APIView):
    permission_classes = [rest_framework.permissions.IsAuthenticated]
    serializer_class = users.serializer.UserSerializer

    def get(self, request):
        user = request.user
        print("Authenticated user:", user)  # Логируем пользователяЁЁ
        serializer = self.serializer_class(user)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)