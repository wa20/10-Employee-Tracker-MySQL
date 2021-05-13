DROP DATABASE IF EXISTS employee_DB;

CREATE database employee_DB;

USE employee_DB;

CREATE TABLE Department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
   id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department_id INTEGER(10) NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INTEGER(10) NULL,
    manager_id INTEGER(10) NULL,
    PRIMARY KEY(id)
);