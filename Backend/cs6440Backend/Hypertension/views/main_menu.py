from django.http import JsonResponse
from django.db import connection
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
from . import db_helper

# Create your views here.
@csrf_exempt
@require_http_methods(['GET'])
def main_menu(request, email):
    try:
        sqlQuery = "SELECT first_name, last_name, nickname FROM [User] WHERE email = %s;"
        data = [email]
        with connection.cursor() as cursor:
            cursor.execute(sqlQuery, data)
            rows = db_helper.dictfetchall(cursor)
            json_data = []
            for row in rows:
                json_data.append({"first_name": row['first_name'], "last_name" : row['last_name'], "nickname" : row['nickname']})
        print(json_data)
        print("!!")

        sqlQuery = "SELECT TOP 1 Date FROM [Appointment] Where email = %s AND Date > GETDATE() order by Date ASC"
        with connection.cursor() as cursor:
            cursor.execute(sqlQuery, [email])
            row1 = db_helper.dictfetchall(cursor)
            for row in row1:
                json_data.append({"Date": row['Date']})

        date = datetime.now().strftime('%Y-%m-%d')
        sqlQuery1 = "SELECT SUM(calories) as totalcalfood FROM [Diet] Where email = '"+email+"' and Date = '"+date+"'"
        with connection.cursor() as cursor:
            cursor.execute(sqlQuery1)
            row2 = db_helper.dictfetchall(cursor)
            for row in row2:
                if row['totalcalfood']:
                    json_data.append({"totalcalfood": row['totalcalfood']})
                else:
                    json_data.append({"totalcalfood": 0}) 

        sqlQuery1 = "SELECT SUM(calories) as totalcalexercise FROM [Exercise] Where email = '"+email+"' and Date = '"+date+"'"
        with connection.cursor() as cursor:
            cursor.execute(sqlQuery1)
            row3=db_helper.dictfetchall(cursor)       
            for row in row3:
                if row['totalcalexercise']:
                    json_data.append({"totalcalexercise": row['totalcalexercise']})  
                else:
                    json_data.append({"totalcalexercise": 0})  

        json_data1=json_data
        print(json_data)
        context = {
            'statusCode': '200',
            'data': json_data1
        }
        return JsonResponse(context)

    except:
        context = {'statusCode': '500', 'Error': '500 Internal error!'}
        return JsonResponse(context, status=500)