-- Create database and tables for mock_users
DROP DATABASE IF EXISTS mock_users;

CREATE DATABASE mock_users;
USE mock_users;

CRE
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    role_type VARCHAR(20) NOT NULL DEFAULT 'user' -- admin or user
);
