from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User


# form for email field in db
class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta(UserCreationForm.Meta):
        fields = UserCreationForm.Meta.fields + ('email',)

# check for valid email
    def clean_email(self):
        email = self.cleaned_data['email']
        if User.objects.filter(email=email).exists():
            raise ValidationError("this email is already in use")
        return email
