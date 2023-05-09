CREATE DATABASE Hypertension;
GO

USE Hypertension;  
GO

CREATE TABLE [User] (
	email varchar(100) NOT NULL,
	password varchar(50) NOT NULL,
	first_name varchar(100) NOT NULL,
	last_name varchar(100) NOT NULL,
	nickname varchar(50) NOT NULL,
	PRIMARY KEY (email),
	UNIQUE (nickname)
);

CREATE TABLE [Appointment] (
	ID int NOT NULL IDENTITY,
	email varchar(100) NOT NULL,
	Date DATETIME NOT NULL,
	type varchar(100) NOT NULL,
	details varchar(100) NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE [Recording] (
	ID int NOT NULL IDENTITY,
	email varchar(100) NOT NULL,
	Date DATETIME NOT NULL,
	systolicbloodpressure varchar(100) NOT NULL,
    diastolicbloodpressure varchar(100) NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE [Exercise] (
	ID int NOT NULL IDENTITY,
	email varchar(100) NOT NULL,
	Date DATE NOT NULL,
	exercise varchar(50) NOT NULL,
    length float NOT NULL,
    calories float DEFAULT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE [Diet] (
	ID int NOT NULL IDENTITY,
	email varchar(100) NOT NULL,
	Date DATE NOT NULL,
	food varchar(50) NOT NULL,
    calories float DEFAULT NULL,
	PRIMARY KEY (ID)
);
GO

INSERT INTO [User] (email, password, first_name, last_name, nickname) VALUES ('yanqy@gatech.edu', 'pwd', 'Qiyang', 'Yan','qyan41');

INSERT INTO [Recording] (email, Date, systolicbloodpressure, diastolicbloodpressure)
VALUES ('yanqy@gatech.edu', '2023-1-3 11:14:56', '119', '64');

INSERT INTO [Recording] (email, Date, systolicbloodpressure, diastolicbloodpressure)
VALUES ('yanqy@gatech.edu', '2023-1-4 12:24:31', '122', '62');
GO
