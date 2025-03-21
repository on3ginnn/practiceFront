import django.db.models
import django.contrib.auth

class User(django.contrib.auth.models.AbstractUser):
    REQUIRED_FIELDS = ["password"]

    def __str__(self):
        return self.username
