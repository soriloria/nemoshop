from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

# all urls from project
urlpatterns = [
    path('login/', views.login_user, name='login'),
    path('basket/', views.basket, name='basket'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    path('about/', views.about, name='about'),
    path('', views.home, name='home'),
    path(r'activate/<uidb64>/<token>/', views.activate_account, name='activate'),
    path('password_reset/', views.PasswordsResetView.as_view(template_name='registration/password_reset.html'),
         name='password_reset'),
    path('password/done/', views.passwordResetDoneView, name='password_done'),
    path('reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(template_name='registration/password_confirm.html'),
         name='password_reset_confirm'),
    path('reset/done/',
         auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_complete.html'),
         name='password_reset_complete'),
    path('activate_info/', views.activateInfo, name='activate_info'),
    path('payment/', views.checkout, name='payment'),
    path('pencils/', views.pencils, name='pencils'),
    path('pens/', views.pens, name='pens'),
    path('notepads/', views.notebooks, name='notepads'),
    path('copybooks/', views.copybooks, name='copybooks'),
    path('markers/', views.markers, name='markers'),
    path('pencil-cases/', views.pencil_cases, name='pencil-cases'),
    path('rulers/', views.rulers, name='rulers'),
    path('backpacks/', views.backpacks, name='backpacks'),
    path('success-payment/', views.successPayment, name='success-payment'),
    path('search/', views.search_view, name='search'),
    path('cabinet/', views.cabinet, name='cabinet'),
]
