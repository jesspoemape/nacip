FROM node:lts-alpine
MAINTAINER jess <jesspoemape@gmail.com>
COPY ./server /srv/nacip
COPY ./build /srv/build
WORKDIR /srv/nacip
RUN npm install
EXPOSE 8000
ENTRYPOINT ["node", "/srv/nacip/server.js"]