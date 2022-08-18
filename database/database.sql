CREATE DATABASE videoclub;

USE videoclub;
/*User table*/
CREATE TABLE users (
    id INT(11) NOT NULL, 
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
);
ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT

/*Movies table*/
CREATE TABLE movies (
    id INT (11) NOT NULL,
    image VARCHAR(10) NOT NULL,
    title VARCHAR (250) NOT NULL,
    description VARCHAR(300) NOT NULL,
    director VARCHAR(50) NOT NULL,
    actor VARCHAR(120) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

);

ALTER TABLE movies
    ADD PRIMARY KEY (id);

ALTER TABLE movies
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT

/*Links table*/
CREATE TABLE links(
    id INT(11) NOT NULL,
    title VARCHAR (150) NOT NULL,
    description TEXT,
    url VARCHAR(255) NOT NULL,
    user.id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREING KEY (user_id) REFERENCES users(id),
);

ALTER TABLE links
    ADD PRIMARY KEY (id);
ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT

DESCRIBE movies;
DESCRIBE users;
DESCRIBE links;
