### Schema

DROP DATABASE IF EXISTS taco_db;

CREATE DATABASE taco_db;

CREATE TABLE tacos(
    id int not null auto_increment,
    type varchar(300) not null,
    primary key (id)
);