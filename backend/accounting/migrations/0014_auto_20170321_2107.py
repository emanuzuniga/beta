# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-03-22 03:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounting', '0013_auto_20170320_1741'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='template',
            field=models.CharField(choices=[('tmp1', 'Asiento de Diario'), ('tmp2', 'Balance General'), ('tmp3', 'Estado de Resultados'), ('tmp2', 'P\xe9rdidas y Ganancias')], max_length=4, verbose_name='Plantilla'),
        ),
    ]
