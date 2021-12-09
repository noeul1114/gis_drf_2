from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response


# UI 설정부분
def hello_world_template(request):
    return render(request, 'accountapp/hello_world.html')



# 로직 처리부분
@api_view()
def hello_world(request):
    return Response({'message': 'Return Text'})
