-- Seed data for the database
USE mock_users;

INSERT INTO users (
    username,
    email,
    user_password,
    first_name,
    last_name,
    phone_number,
    role_type
)
VALUES
    ('testadmin', 'test1@gmail.com', 'test123', 'brian', 'testadmin', '210-555-5555', 'admin'),
    ('testuser', 'test2@gmail.com', 'test123', 'brian', 'testuser', '210-555-5555', 'user');
