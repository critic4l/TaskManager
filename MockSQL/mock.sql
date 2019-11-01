/* TASK TABLES MOCK */
INSERT INTO task_table (name, description) VALUES
	("new", "newly created tasks"),
	("in_progress", "tasks in progress"),
	("closed", "closed tasks");
	
	
/* TASKS MOCK */

/* task_table -> 'new' */
INSERT INTO task (title, description) VALUES
	("do laundy", "somethin'"),
	("bake pizza", "pepperoni pizza"),
	("Eat at the Hard Rock Cafe", ""),
	("Bake Cinnamon Rolls", ""),
	("Learn to Do the Splits", "dem splitz");
	
	
INSERT INTO task (table_id, title, description) VALUES
	(2, "Complete a Painting in One Day", "bob ross would be proud"),
	(2, "Hold a Venomous Snake", "watch out, they bite!"),
	(3, "Find a Stick Bug", ""),
	(2, "Box a Kangaroo", "just australian things"),
	(3, "Rate Every Single Beatles Song", "10/10");