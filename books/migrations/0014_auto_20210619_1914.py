# Generated by Django 3.0.8 on 2021-06-19 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0013_auto_20210618_2007'),
    ]

    operations = [
        migrations.AddField(
            model_name='ownershistory',
            name='bookedon',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='ownershistory',
            name='deliveredon',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='ownershistory',
            name='returnedon',
            field=models.DateField(default=None),
        ),
    ]
