FROM node:current-alpine

ENV HOME=/app

RUN apk update && apk upgrade

WORKDIR $HOME
