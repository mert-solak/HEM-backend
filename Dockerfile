FROM node:15

WORKDIR /app

COPY package.json .

RUN npm install

RUN mkdir dist

EXPOSE 3000

CMD ["npm", "run" ,"start:dev"]

