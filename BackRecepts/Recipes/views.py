from django.shortcuts import render
from rest_framework import generics
from .models import Category, Recipes
from .serializers import CategorySerializer, RecipesSerializer

class CategoryApi(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipesApi(generics.ListAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer
