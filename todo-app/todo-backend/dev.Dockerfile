FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN chmod +x /usr/src/app/node_modules/.bin/nodemon

# ENV REDIS_URL=redis://redis:6379
# ENV MONGO_URL=mongodb://the_username:the_password@mongo:27017/the_database

CMD npm run dev