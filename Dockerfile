FROM node:14-alpine as build
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
ADD package.json /app/
RUN npm i
ADD . /app
RUN npm run build

FROM nginx
LABEL name='react-meeting'
LABEL version='1.0'
# VOLUME . /app
VOLUME ./react.conf /etc/nginx/conf.d
VOLUME ./gzip.conf /etc/nginx/conf.d
COPY --from=0 /app/dist /code/www
RUN ls /code/www
EXPOSE 80
