from django.urls import path
from django.urls import include
from rest_framework import routers
from itemsetting.views import *

router = routers.DefaultRouter()

router.register(r'productscrud', ItemCategory, 'productscrud'),
# router.register(r'productscrud', ItemCategory, 'productsget'),
# router.register(r'productscrud', ItemCategory, 'productedit'),
router.register(r'productsview', ProductViewSet,'productsview')    


urlpatterns = [
    path('', include(router.urls)),
]
 