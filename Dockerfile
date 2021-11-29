FROM node:14.15.0-alpine3.12

WORKDIR /app

COPY package.json .

RUN npm install

COPY .  .

ENV HOST 0.0.0.0

EXPOSE 3000

RUN npm run dev