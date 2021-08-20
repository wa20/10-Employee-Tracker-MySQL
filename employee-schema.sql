DROP DATABASE IF EXISTS employee_DB;

CREATE database employee_DB;

USE employee_DB;

CREATE TABLE Department (
    department_id INT NOT NULL AUTO_INCREMENT,
    department VARCHAR(30) NOT NULL,
    PRIMARY KEY(department_id)
);

CREATE TABLE Role (
   id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department_id INTEGER(10) NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INTEGER(10) NULL,
    manager_id INTEGER(10) NULL,
    PRIMARY KEY(id)
);