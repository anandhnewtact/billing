from django.db import models

# Create your models here.



class Common(models.Model):

    created_date = models.DateTimeField('created_date', auto_now = True)
    updated_date = models.DateTimeField('updated_date', auto_now = True)
    active = models.BooleanField('active', default = True)

    class Meta:
        abstract = True

class Products(Common):
    product_code = models.CharField('product_code', max_length = 50, primary_key=True)
    product_name = models.CharField('product_name', max_length = 50, unique=True)
    unit = models.CharField('tamil_name', max_length = 50,blank=True,null=True)
    tamil_name = models.CharField('tamil_name', max_length = 50,blank=True,null=True)
    price = models.CharField('price', max_length = 50)
    old_price = models.CharField('old_price', max_length = 50)
    price_update = models.CharField('new_price_changing_date', max_length = 50)
    product_added_date = models.CharField('product_added_date', max_length = 50)


    def __str__(self):
        return "{}".format(self.product_name)