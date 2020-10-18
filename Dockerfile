FROM node:dubnium

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy application source
COPY . /usr/src/app

# install dependencies
RUN npm ci
# build application
RUN npm run build

WORKDIR /usr/src/app/modules/api

# install dependencies
RUN npm ci
# build application
RUN npm run build

WORKDIR /usr/src/app

# install pm2 globally
RUN npm install pm2 -g

#set environment variables
ENV IP=0.0.0.0
ENV PORT=8080

EXPOSE 8080
CMD [ "pm2-runtime", "pm2.config.js" ]
