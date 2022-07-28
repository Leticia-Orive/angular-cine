CREATE DATABASE videoclub;

USE videoclub;

CREATE TABLE movies {
    id INT (10000) NOT NULL AUTO_INCREMENT PRIMARY KEY;;
    image VARCHAR (10);
    title VARCHAR (250);
    description VARCHAR (300);
    director VARCHAR (50);
    actor VARCHAR (120);
    genre VARCHAR (50);
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
};

DESCRIBE movies;
