# Use the official Python image as the base image
FROM python:3.9-alpine

RUN apk add --no-cache gcc g++ musl-dev python3-dev

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the dependencies

RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files into the container
COPY . .

# Set environment variables
ENV FLASK_APP=app.py

# Expose the port the app runs on (e.g., 5000)
EXPOSE 5000

# Set the command to run the Flask application
CMD ["flask", "run", "--host=0.0.0.0"]
