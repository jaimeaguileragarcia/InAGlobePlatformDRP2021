FROM openjdk:11
FROM node:14.16.0

# Install maven
RUN apt-get update -y && apt-get install maven -y

# Install React
RUN apt install nodejs 
RUN apt install npm
RUN npm install react-router-dom

# Copy the needed files to build the application 
COPY . /

# Run mvn package from the correct container’s directory
RUN mvn package

# Start the app on container execution
RUN export PORT=5000
CMD ["sh", "target/bin/drp-inaglobe-platform"]

