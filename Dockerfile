FROM node:14.16.0

# Cd into the React App dir
RUN cd inaglobe-dashboard/

# Install React
RUN apt install nodejs 
RUN apt install npm
RUN npm install react-router-dom

# Copy the needed files to build the application 
COPY . /

# Run mvn package from the correct container’s directory
RUN npm run start

# Start the app on container execution
RUN export PORT=5000
CMD ["sh", "target/bin/drp-inaglobe-platform"]

