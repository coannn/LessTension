from unittest import skip
from django.http import JsonResponse
from django.db import connection
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import  json
from . import db_helper

@csrf_exempt
@require_http_methods(['GET'])

def get_exercise(request, email):
    try:
        print(email)
        sqlQuery = "SELECT * FROM [Exercise] Where email = %s"
        with connection.cursor() as cursor:
            cursor.execute(sqlQuery, [email])
            rows = db_helper.dictfetchall(cursor)
        
        context = {
            'statusCode': '200',
            'data': rows
        }
        return JsonResponse(context)
    except:
        context = {'statusCode': '500', 'Error': '500 Internal error!'}
        return JsonResponse(context)