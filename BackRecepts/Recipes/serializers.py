from rest_framework import serializers
from .models import Category, Recipes


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name',)


class  RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ('id','category', 'name', 'description')