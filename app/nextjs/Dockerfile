FROM node:20-bookworm

ENV PATH /usr/local/bin:$PATH

RUN mkdir bookstore_frontend

WORKDIR /bookstore_frontend

COPY ./frontend/package.json .

RUN npm install

COPY frontend/ .

