### Schema

DROP DATABASE IF EXISTS taco_db;

CREATE DATABASE taco_db;

USE taco_db;

CREATE TABLE taco(
    id int not null auto_increment,
    taco varchar(300) not null,
    tasted BOOLEAN DEFAULT false,
    primary key (id)
);