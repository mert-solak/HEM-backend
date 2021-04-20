FROM node:14.16.1

WORKDIR /app

RUN mkdir dist
RUN mkdir node_modules

COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "run" ,"start:dev"]

