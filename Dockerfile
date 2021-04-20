FROM node:14.16.1

WORKDIR /app

COPY package.json .

RUN npm install

RUN mkdir dist

EXPOSE 3000

CMD ["npm", "run" ,"start:dev"]

