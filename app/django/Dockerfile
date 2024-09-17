FROM python:3.11-bookworm

ENV PATH /usr/local/bin:$PATH

RUN mkdir bookstore_backend

WORKDIR /bookstore_backend

COPY ./backend/requirements.txt .

RUN python3 -m pip install -r requirements.txt 

COPY backend/ .

RUN python manage.py makemigrations