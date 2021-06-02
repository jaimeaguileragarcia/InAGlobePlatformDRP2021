FROM node:14.16.0

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-router-dom

# add app
COPY . ./

# start app
RUN export PORT=5000
CMD ["npm", "start"]
