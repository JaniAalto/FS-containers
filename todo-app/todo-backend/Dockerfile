FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN chmod +x /usr/src/app/node_modules/.bin/nodemon

ENV REDIS_URL=redis://localhost:6379
ENV MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database

ENV DEBUG=playground:*

CMD npm start