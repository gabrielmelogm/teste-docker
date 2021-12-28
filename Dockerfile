FROM node:14.17.3-alpine AS builder

RUN apk add --no-cache bash #Instala o bash
RUN apk add --no-cache shadow #Pacote para permissões
RUN usermod -u 1000 node
USER node
WORKDIR /home/node
