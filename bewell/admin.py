from django.contrib import admin

from bewell.models import Exercise


@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    pass
