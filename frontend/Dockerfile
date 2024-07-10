FROM node:20

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build
CMD npm start
