FROM python:3.11-bookworm

ENV PATH /usr/local/bin:$PATH

WORKDIR /bookstore
COPY ./requirements.txt .

RUN python3 -m pip install -r requirements.txt 

COPY . .

RUN python manage.py makemigrations