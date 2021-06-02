FROM node:14.16.0

# set working directory
WORKDIR /inaglobe-dashboard

# add `/app/node_modules/.bin` to $PATH
ENV PATH /inaglode-dashboard/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install react-router-dom

# add app
COPY . ./

# start app
RUN export PORT=5000
CMD ["npm", "start"]
