from django.http import JsonResponse
from django.db import connection
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import  json
from . import db_helper
from datetime import datetime


@csrf_exempt
@require_http_methods(['GET'])
def get_food_total(request, email):

    try:
        date = datetime.now().strftime('%Y-%m-%d')
        print(date)
        sqlQuery1 = "SELECT SUM(calories) as totalcal FROM [Diet] Where email = '"+email+"' and Date = '"+date+"'"
        print(sqlQuery1)
        with connection.cursor() as cursor:
            cursor.execute(sqlQuery1)
            rows3 = db_helper.dictfetchall(cursor)
            print(rows3)

        context = {
            'statusCode': '200',
            'data': rows3
        }
        return JsonResponse(context)
    except:
        context = {'statusCode': '500', 'Error': '500 Internal error!'}
        return JsonResponse(context)