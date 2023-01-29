FROM node:19-alpine as build
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
ADD package.json /app/
RUN npm i
ADD . /app
RUN npm run build

FROM nginx
LABEL name='vue-vw'
LABEL version='1.0'
# VOLUME . /app
VOLUME ./vue.conf /etc/nginx/conf.d
VOLUME ./gzip.conf /etc/nginx/conf.d
COPY --from=0 /app/dist /usr/share/nginx/html
RUN ls /usr/share/nginx/html
EXPOSE 80
