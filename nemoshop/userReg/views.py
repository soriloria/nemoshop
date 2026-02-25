from django.core.mail import EmailMessage

from django.contrib.auth.views import PasswordResetView
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.decorators import login_required

from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib import messages
from django.template.loader import render_to_string
from django.urls import reverse_lazy
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

from userReg.forms import CustomUserCreationForm
from django.utils.encoding import force_bytes
from django.contrib.auth.models import User
from userReg.token_generator import account_activation_token

from django import forms

import stripe
import os

from .models import Titles


# homepage
def home(request):
    return render(request, 'home.html')


# authentication user function
def authenticate_with_email(request, email=None, password=None):
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(email=email)
        if user.check_password(password):
            return user
    except UserModel.DoesNotExist:
        return None


# function to user login to
def login_user(request):
    if request.method == 'POST':
        login_identifier = request.POST['login_identifier']
        password = request.POST['password']
        user = authenticate(username=login_identifier, password=password) or authenticate_with_email(request,
                                                                                                     email=login_identifier,
                                                                                                     password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            error_message = 'Email or password is wrong.'
            messages.error(request, error_message)
            return redirect('login')
    else:
        return render(request, 'login.html')


# logout function
def logout_user(request):
    logout(request)
    return redirect('home')


# register function with e-mail link confirmation
def register_user(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            current_site = get_current_site(request)
            email_subject = 'Activate Your Account'
            message = render_to_string('registration/activate_account.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(email_subject, message, to=[to_email])
            email.send()
            return redirect('activate_info')
    else:
        form = CustomUserCreationForm()

    errors = form.errors.get_json_data()
    non_field_errors = form.non_field_errors()

    return render(request, 'registration/registration.html',
                  {'form': form, 'errors': errors, 'non_field_errors': non_field_errors})


# activating account with link from e-mail and checking if it is valid
def activate_account(request, uidb64, token):
    try:
        uid = force_bytes(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        return render(request, 'registration/successReg.html')
    else:
        return render(request, 'registration/invalid_link.html')


# check if email is registered to reset password
class CustomPasswordResetForm(PasswordResetForm):
    def clean_email(self):
        email = self.cleaned_data['email']
        if not User.objects.filter(email=email).exists():
            raise forms.ValidationError("This email is not registered")
        return email


# password reset page
class PasswordsResetView(PasswordResetView):
    form_class = CustomPasswordResetForm
    success_url = reverse_lazy('password_done')


# password reset page
def passwordResetDoneView(request):
    return render(request, 'registration/password_done.html')


# about page
def about(request):
    return render(request, 'pages/about.html')


# activation page
def activateInfo(request):
    return render(request, 'registration/activate_info.html')


# pencils page
def pencils(request):
    return render(request, 'products/pencils.html')


# pens page
def pens(request):
    return render(request, 'products/pens.html')


# notebooks page
def notebooks(request):
    return render(request, 'products/notebooks.html')


# copybooks page
def copybooks(request):
    return render(request, 'products/copybooks.html')


# markers page
def markers(request):
    return render(request, 'products/markers.html')


# pencil-cases page
def pencil_cases(request):
    return render(request, 'products/pencil_cases.html')


# rulers page
def rulers(request):
    return render(request, 'products/rulers.html')


# backpacks page
def backpacks(request):
    return render(request, 'products/backpacks.html')


# basket page
def basket(request):
    return render(request, 'products/basket.html')


# payment page
def checkout2(request):
    return render(request, 'payment.html')


# importing key for payment
stripe.api_key = os.environ.get('STRIPE_API_KEY')


# payment options
def checkout(request):
    DOMAIN = 'http://127.0.0.1:8000'

    if request.method == 'POST':
        total_price = request.POST.get('total_price')

    a = float(total_price)

    checkout_session = stripe.checkout.Session.create(
        payment_method_types=[
            'card',
        ],
        line_items=[
            {
                'price_data': {
                    'currency': 'usd',
                    'unit_amount': int(a * 100),
                    'product_data': {
                        'name': 'Amount to Pay:',
                    },
                },
                'quantity': 1,
            },
        ],
        mode='payment',
        success_url=DOMAIN + '/success-payment',
        cancel_url=DOMAIN + '/basket',
    )

    return redirect(checkout_session.url, code=303)


# successful payment page
def successPayment(request):
    return render(request, 'pages/successPayment.html')


# function for searchbar to communicate with DB
def search_view(request):
    if request.method == 'POST':
        query = request.POST.get('query', '')
        if query.strip():
            titles = Titles.objects.filter(title__icontains=query)
        else:
            titles = []
        return render(request, 'search_results.html', {'query': query, 'titles': titles})
    else:
        return render(request, 'search_results.html')


# cabinet page
@login_required(login_url='login')
def cabinet(request):
    return render(request, 'pages/cabinet.html')
