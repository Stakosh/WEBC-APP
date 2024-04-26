-- Create database
CREATE DATABASE app_dev;

-- Connect to the app_dev database
\c app_dev;

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

-- Create contact table
CREATE TABLE contact (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Insert initial user (replace 'hashed_password_here' with a securely hashed password)
INSERT INTO users (email, password_hash)
VALUES ('user@example.com', 'hashed_password_here');

-- Optional: Create an index on the email column for faster lookups in users table
CREATE INDEX idx_users_email ON users(email);
