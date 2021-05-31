FROM openjdk:11

# Install maven
RUN apt-get update -y && apt-get install maven -y

# Install pandoc
RUN apt-get install pandoc -y
RUN apt-get install texlive -y

# Copy the needed files to build the application 
COPY . /

# Run mvn package from the correct container’s directory
RUN mvn package

# Start the app on container execution
RUN export PORT=5000
CMD ["sh", "target/bin/drp-inaglobe-platform"]

