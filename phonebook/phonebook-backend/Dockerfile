FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm ci

CMD npm start