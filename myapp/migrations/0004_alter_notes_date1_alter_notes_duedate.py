# Generated by Django 4.2.7 on 2023-12-02 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_auto_20231201_1533'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='date1',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='notes',
            name='duedate',
            field=models.DateField(),
        ),
    ]