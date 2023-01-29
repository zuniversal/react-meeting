FROM node
LABEL name='vue-vw-webhook'
LABEL version='1.0'
COPY . /app
# COPY ./package.json ./webhook.js ./sendMail.js /app
# COPY [./package.json, ./webhook.js, ./sendMail.js, /app]
WORKDIR /app
RUN npm i
EXPOSE 9009
CMD npm start

# FROM node
# LABEL name='vue-vw-webhook'
# LABEL version='1.0'
# # COPY . /app
# # # COPY ./package.json ./webhook.js ./sendMail.js /app
# # # COPY [./package.json, ./webhook.js, ./sendMail.js, /app]
# # WORKDIR /app
# # RUN npm i
# # EXPOSE 9009
# CMD node ./testHook.js