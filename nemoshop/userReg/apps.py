from django.apps import AppConfig
from django.db.models.signals import post_migrate

class UserregConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'userReg'

    def ready(self):
        from .models import Titles
        from django.db.utils import OperationalError

        def create_initial_titles(sender, **kwargs):
            try:
                titles = [
                    "pencils", "pens", "notepads", "copybooks",
                    "markers", "pencil-cases", "rulers", "backpacks"
                ]
                for t in titles:
                    Titles.objects.get_or_create(title=t)
            except OperationalError:
                pass

        post_migrate.connect(create_initial_titles, sender=self)