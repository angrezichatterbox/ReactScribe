# Generated by Django 3.2.9 on 2023-12-01 15:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_auto_20231201_1532'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notes',
            old_name='date',
            new_name='date1',
        ),
        migrations.RenameField(
            model_name='notes',
            old_name='due_date',
            new_name='duedate',
        ),
    ]
