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

# build react app
RUN npm run build

# set environment variable
ENV NODE_ENV=production

# expose port 3000
EXPOSE 3000

# start the app
CMD ["npm", "start"]
