# Generated by Django 3.0.6 on 2020-05-22 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('itemsetting', '0002_auto_20200519_1249'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='new_price_changing_date',
            new_name='price_update',
        ),
        migrations.RemoveField(
            model_name='products',
            name='agency_name',
        ),
        migrations.RemoveField(
            model_name='products',
            name='product_quantity',
        ),
        migrations.AddField(
            model_name='products',
            name='unit',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='tamil_name'),
        ),
    ]