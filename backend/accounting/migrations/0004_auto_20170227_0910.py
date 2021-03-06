# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-02-27 15:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounting', '0003_auto_20170227_0830'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='accountcategory',
            name='company',
        ),
        migrations.RemoveField(
            model_name='accountgroup',
            name='category',
        ),
        migrations.RemoveField(
            model_name='accountgroup',
            name='company',
        ),
        migrations.RemoveField(
            model_name='detailaccount',
            name='company',
        ),
        migrations.RemoveField(
            model_name='detailaccount',
            name='subaccount',
        ),
        migrations.RemoveField(
            model_name='subaccount',
            name='account',
        ),
        migrations.RemoveField(
            model_name='subaccount',
            name='company',
        ),
        migrations.AlterModelOptions(
            name='account',
            options={},
        ),
        migrations.RemoveField(
            model_name='entrydetail',
            name='detailAccount',
        ),
        migrations.RemoveField(
            model_name='entrydetail',
            name='subAccount',
        ),
        migrations.DeleteModel(
            name='AccountCategory',
        ),
        migrations.DeleteModel(
            name='AccountGroup',
        ),
        migrations.DeleteModel(
            name='DetailAccount',
        ),
        migrations.DeleteModel(
            name='SubAccount',
        ),
    ]
