#!/bin/sh

echo "Waiting for PostgreSQL..."
while ! nc -z db 5432; do
  sleep 1
done
echo "PostgreSQL is up!"

echo "Running migrations..."
python manage.py migrate --noinput

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Starting Gunicorn..."
exec gunicorn Shop.wsgi:application --bind 0.0.0.0:8000