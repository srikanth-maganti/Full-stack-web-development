FROM node:14
WORKDIR /app


#install app dependencies
COPY package*.json /app
RUN npm install

#bundle app source
COPY . /app

CMD ["npm","start"]