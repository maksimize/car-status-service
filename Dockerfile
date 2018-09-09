FROM node:alpine

COPY . /car-status-service

WORKDIR /car-status-service

CMD  ["npm","start"]
