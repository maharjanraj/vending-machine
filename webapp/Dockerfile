FROM node:17-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY yarn.lock ./

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]