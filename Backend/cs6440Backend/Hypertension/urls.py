from django.urls import path
from django.urls import re_path

from Hypertension.views import appointment
from Hypertension.views import exercise
from Hypertension.views import food
from Hypertension.views import recording

from Hypertension.views import login
from Hypertension.views import register
from Hypertension.views import main_menu
from Hypertension.views import recording_post
from Hypertension.views import exercise_post
from Hypertension.views import food_post
from Hypertension.views import food_total
from Hypertension.views import appointment_post
from Hypertension.views import appointment_latest

urlpatterns = [
    re_path(r'^(?i)appointments/(.+)$', appointment.get_appointments, name='appointments'),
    re_path(r'^(?i)appointments_latest/(.+)$', appointment_latest.get_appointments_first, name='appointments latest'),
    re_path(r'^(?i)appointments_post/$', appointment_post.appointments_post, name='appointments post'),
    re_path(r'^(?i)exercise/(.+)$', exercise.get_exercise, name='exercise'),
    re_path(r'^(?i)exercise_post/$', exercise_post.exercise_post, name='exercise post'),
    re_path(r'^(?i)food/(.+)$', food.get_food, name = 'food'),
    re_path(r'^(?i)food_total/(.+)$', food_total.get_food_total, name = 'food total'),
    re_path(r'^(?i)food_post/$', food_post.food_post, name = 'food post'),
    re_path(r'^(?i)recording/(.+)$', recording.get_recording, name = 'recording'),
    re_path(r'^(?i)recording_post/$', recording_post.post_record, name = 'recording post'),
    re_path(r'^(?i)login/(.+)$', login.login, name='login'),
    re_path(r'^(?i)register/$', register.register, name='register'),
    re_path(r'^(?i)main_menu/(.+)$', main_menu.main_menu, name='main_menu')
]
