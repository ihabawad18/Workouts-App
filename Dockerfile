FROM node:21-alpine3.17

WORKDIR /frontend/

COPY /frontend/package*.json .

RUN npm install

COPY /frontend/ .

WORKDIR /backend/

COPY /frontend/package*.json .

RUN npm install

COPY /backend/ .

EXPOSE 3000 4000

CMD ["sh", "-c", "cd /backend && npm start & cd /frontend && npm start"]
