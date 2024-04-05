from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pyqrcode import create
import png
from datetime import datetime



class QrGenerator(APIView):
    def post(self,request):
         current_datetime = datetime.now()
         datetime_string = current_datetime.strftime(" %Y-%m-%d %H-%M-%S")
         print(datetime_string)
         fileName = request.data['fileName'] + datetime_string
         embedded_qr = create(request.data['content'])
         embedded_qr.png(f'media/{fileName}.png', scale=6, module_color=[0, 0, 0, 128], background=[255, 255, 255])
         return Response({'key': f'media/{fileName}.png'},status=status.HTTP_200_OK)