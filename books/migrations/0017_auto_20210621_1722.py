# Generated by Django 3.0.8 on 2021-06-21 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0016_auto_20210619_1938'),
    ]

    operations = [
        migrations.AddField(
            model_name='ownershistory',
            name='ownedbookid',
            field=models.IntegerField(default=None),
        ),
        migrations.AddField(
            model_name='ownershistory',
            name='returnedbookid',
            field=models.IntegerField(default=None),
        ),
    ]
