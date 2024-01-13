# Generated by Django 5.0.1 on 2024-01-12 22:47

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Batiment",
            fields=[
                ("id", models.IntegerField(primary_key=True, serialize=False)),
                ("nom", models.CharField(max_length=255)),
                ("nombre_appartement", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Appartement",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("numero", models.IntegerField()),
                ("surface", models.DecimalField(decimal_places=2, max_digits=10)),
                ("prix", models.DecimalField(decimal_places=2, max_digits=10)),
                (
                    "batiment",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="batiments.batiment",
                    ),
                ),
            ],
        ),
    ]