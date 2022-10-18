USE employee_DB;

INSERT INTO department(name)
VALUES ("Human Resource Management"), ("Engineering"), ("Sales"), ("Marketing"), ("Legal"), ("Finance");

INSERT INTO role(title, salary, department_id)
VALUES ("HR Manager", 82000, 5), 
	("Technical Lead",90000,1),
	("Sales Representative",45000, 2),
	("Account Executive", 53000, 3),
	("Accountant", 65200, 3),
	("Marketing Manager",79000, 4),
	("Software Engineer", 62000, 1)
	("Lawyer", 65000, 6),
	("Senior staff", 65000, 1),
	("Legal Team Lead", 70000, 6),
	("Sales Lead", 60000,2);
    
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Andrea", "Dovizioso", 3, NULL),
	("Johann", "Zarco", 1, 1),
	("Stefan", "Bradl", 2, 1),
	("Luca", "Marini", 5, NULL),
	("Fabio ", "quartarao", 4, 4),
	("Franco","Morbidelli",7, NULL),
	("Enea","Bastianini", 11, NULL),
	("Paul", "Fernandez",10, 7);

