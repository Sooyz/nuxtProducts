FROM node:14-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/

RUN npm install && npm install -g nuxt && npx nuxi devtools enable && npm run dev

COPY . .

ENV PATH ./node_modules/.bin/:$PATH

EXPOSE 9229