FROM node:16-alpine3.14 
WORKDIR /usr/app


COPY ./api ./api

COPY ./package.json ./

COPY ./.env ./


RUN cd api
RUN rm -Rf node_modules

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start-api:dev" ]

