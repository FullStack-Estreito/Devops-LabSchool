FROM node:18

WORKDIR /projeto

COPY . .

RUN npm install

EXPOSE 5000

CMD [  "npm", "run", "start"] 