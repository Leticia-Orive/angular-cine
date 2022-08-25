CREATE DATABASE videoclub;

USE videoclub;
/*User table*/
CREATE TABLE users (
    id INT(11) PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

/*Movies table*/
CREATE TABLE movies (
    id INT (11) PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(10) NOT NULL,
    title VARCHAR (250) NOT NULL,
    description VARCHAR(300) NOT NULL,
    director VARCHAR(50) NOT NULL,
    actor VARCHAR(120) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Links table*/
CREATE TABLE links(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (150) NOT NULL,
    description TEXT,
    url VARCHAR(255) NOT NULL,
    user.id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREING KEY (user_id) REFERENCES users(id)
);

DESCRIBE movies;
DESCRIBE users;
DESCRIBE links;
