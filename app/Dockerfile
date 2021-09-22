
FROM node:alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /usr/app/
COPY ./app ./app
COPY ./package.json ./
RUN yarn 





EXPOSE 3000



CMD ["yarn", "start-app:dev"]