from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Products


class ProductsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = ("__all__")

class ProductsSearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = ("__all__")

