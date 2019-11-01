DROP DATABASE IF EXISTS test;
CREATE DATABASE test;
USE test;

CREATE TABLE task_table(
	id SERIAL,
	name VARCHAR(255) DEFAULT "new table",
	description TEXT,
	PRIMARY KEY (id)
);

CREATE TABLE task(
	id SERIAL,
	table_id INT DEFAULT 1 NOT NULL,
	user_id INT,
	title VARCHAR(255) DEFAULT "new task",
	description TEXT,
	PRIMARY KEY (id)
);

CREATE TABLE user(
	id SERIAL,
	login VARCHAR(255),
	password VARCHAR(255),
	PRIMARY KEY (id)
)