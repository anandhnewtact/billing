from django.contrib import admin

from .models import Products

class ProductsAdmin(admin.ModelAdmin):
    list_display = ['product_code','product_name','unit','tamil_name','price','old_price','price_update','product_added_date','active']
    list_per_page = 15

admin.site.register(Products,ProductsAdmin)
