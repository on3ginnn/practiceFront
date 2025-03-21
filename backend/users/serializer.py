import secrets
import string

import django.contrib.auth
import rest_framework

USER_MODEL = django.contrib.auth.get_user_model()


class UserSerializer(rest_framework.serializers.ModelSerializer):
    class Meta:
        model = USER_MODEL     
        fields = ['id', 'username']
    

class UserListWithPasswordSerializer(rest_framework.serializers.ModelSerializer):
    class Meta:
        model = USER_MODEL
        fields = ['id', 'username', 'password', "first_name", "last_name", "email", "role"]

    def to_representation(self, instance):
        data = super().to_representation(instance)
        
        print(data['password'])

        return data

class UserCreateSerializer(rest_framework.serializers.ModelSerializer):
    
    class Meta:
        model = USER_MODEL
        fields = ['username', 'password']

    def validate_password(self, value):
        if len(value) < 8:
            raise rest_framework.serializers.ValidationError("Пароль должен быть не менее 8 символов.")
        
        if not any(char.islower() for char in value):
            raise rest_framework.serializers.ValidationError("Пароль должен содержать хотя бы одну строчную букву.")
        
        if not any(char.isupper() for char in value):
            raise rest_framework.serializers.ValidationError("Пароль должен содержать хотя бы одну заглавную букву.")
        
        if not any(char.isdigit() for char in value):
            raise rest_framework.serializers.ValidationError("Пароль должен содержать хотя бы одну цифру.")
        
        return django.contrib.auth.hashers.make_password(value)


class UserUpdateSerializer(rest_framework.serializers.ModelSerializer):

    class Meta:
        model = USER_MODEL
        fields = ['username', 'password', "first_name", "last_name", 'father_name', 'phone_number', "email", "role"]