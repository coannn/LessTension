from django.http import JsonResponse
from django.db import connection
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json

from . import db_helper

@csrf_exempt
@require_http_methods(['POST'])
def post_record(request):
    try:
        body = json.loads(request.body)
        print(body)
        email = body['email']
        date = body['date']
        SPress = body['SPress']
        DPress = body['DPress']

        with connection.cursor() as cursor:
            sqlQuery = "INSERT INTO [Recording] (email, Date, systolicbloodpressure, diastolicbloodpressure) VALUES  (%s, %s, %s, %s)"
            data = [email, date, SPress, DPress]
            print("12312")
            cursor.execute(sqlQuery, data)

        connection.cursor().close()
        connection.close()
        response = {
            'statusCode': '200',
            'data': 'ok!'
        }
        return JsonResponse(response)
    except Exception:
        print('Error: 500 Internal error!')
        context = {'statusCode': '500', 'Error': '500 Internal error!'}
        return JsonResponse(context, status=500)