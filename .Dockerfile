FROM node:current-alpine

RUN apk update && apk upgrade
RUN npm install yarn -g

ENV HOME=/app
WORKDIR $HOME