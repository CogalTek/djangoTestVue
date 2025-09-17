FROM python:3.11-slim

WORKDIR /app

# deps système utiles (tzdata, build, etc.)
RUN apt-get update && apt-get install -y --no-install-recommends \
	tzdata curl git build-essential \
	&& rm -rf /var/lib/apt/lists/*

# venv (optionnel mais propre)
RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

# dépendances Python
COPY requirements.txt /app/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# on copie le code à l'exécution via bind mount dans compose
EXPOSE 8000

CMD sh -c "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"
