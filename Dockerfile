# Use the official Node.js image from Docker Hub
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose the application port (ensure this is the port your app runs on)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
