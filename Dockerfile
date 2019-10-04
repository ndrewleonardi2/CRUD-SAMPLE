FROM node:12.10.0-slim

#Create App Directory
WORKDIR /usr/app

# Install app dependencies
# Both package.json AND package-lock.json are copied
COPY package*.json ./

ARG PORT
RUN echo "PORT number: $PORT"

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE $PORT
CMD [ "npm", "start" ]