from django.shortcuts import render

from django.db import transaction
from django.conf import settings
from rest_framework import(
    viewsets,
    response,
    exceptions,
    generics,
    filters,
    permissions
)

from .models import*

from itemsetting.serializer import ProductsSerializer,ProductsSearchSerializer

class ItemCategory(viewsets.ModelViewSet):

    queryset = Products.objects.filter(active=True).all()
    serializer_class = ProductsSerializer
    lookup_field = "pk"

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        products = request.data
        product_serializer = self.serializer_class(data=products)
        if product_serializer.is_valid(raise_exception=True):
            product_serializer.save()
        return response.Response({"result": "item category added successfully"})

    @transaction.atomic
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # prod = instance.product_code
        # Products.objects.filter(product_code=prod,active=True).update(active=False)
        product_serializer = self.serializer_class(instance,data=request.data)
        if product_serializer.is_valid(raise_exception=True):
            product_serializer.save()
        return response.Response({"result":"Product details updated  successfully"})

    @transaction.atomic
    def destroy(self, request, *args,**kwargs):
        products = self.get_object()
        products.delete()
        return response.Response({"result":"product details deleted successfully"})

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.filter(active=True).all()
    serializer_class = ProductsSearchSerializer
    search_fields = ['^product_name','^product_code','^tamil_name']
    filter_backends = (filters.SearchFilter,)






    







