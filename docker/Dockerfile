FROM node:12.12.0-alpine

WORKDIR /app

RUN apk update && \
    npm install && \
    npm install -g npm && \
    npm install -g @vue/cli

ENV HOST 0.0.0.0
EXPOSE 8080
