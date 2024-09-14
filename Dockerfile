FROM python:3.11-bookworm

ENV PATH /usr/local/bin:$PATH

WORKDIR /backend/bookstore
COPY ./backend/requirements.txt .

RUN python3 -m pip install -r requirements.txt 

COPY . .

RUN python backend/manage.py makemigrations