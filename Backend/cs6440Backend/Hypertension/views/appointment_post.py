from django.http import JsonResponse
from django.db import connection
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import  json
from . import db_helper

@csrf_exempt
@require_http_methods(['POST'])

def appointments_post(request):
    try:
        body = json.loads(request.body)
        print(body)
        email = body['email']
        date = body['date']
        type = body['type']
        details = body['details']

        with connection.cursor() as cursor:
            sqlQuery = "INSERT INTO [Appointment] (email, Date, type, details) VALUES  (%s, %s, %s, %s)"
            data = [email, date, type, details]
            cursor.execute(sqlQuery,data)
            rows = db_helper.dictfetchall(cursor)
        
        context = {
            'statusCode': '200',
            'data': rows
        }
        return JsonResponse(context)
    except:
        context = {'statusCode': '500', 'Error': '500 Internal error!'}        
        return JsonResponse(context)