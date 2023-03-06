# base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files to working directory
COPY . .

# set environment variable
ENV NODE_ENV=production

# expose port 5000
EXPOSE 5000

# start the app
CMD ["node", "index.js"]
