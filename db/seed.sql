USE employee_DB;

INSERT INTO department(name)
VALUES ("Engineering"), ("Sales"), ("Finance"), ("Marketing"), ("Human Resource Management"), ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES ("Software Engineer", 80000, 1), 
	("Senior staff", 65000, 1), 
	("Technical Lead",75000,1),
	("Sales Representative",50000, 2),
	("Sales Lead", 60000,2),
	("Account Executive", 55000, 3),
	("Accountant", 50000, 3),
	("Marketing Manager",75000, 4),
	("HR Manager", 75000, 5),
	("Lawyer", 65000, 6),
	("Legal Team Lead", 70000, 6)
    ;
    
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Andrea", "Dovizioso", 3, NULL),
	("Johann", "Zarco", 1, 1),
	("Stefan", "Bradl", 2, 1),
	("Luca", "Marini", 5, NULL),
	("Fabio ", "quartarao", 4, 4),
	("Franco","Morbidelli",7, NULL),
	("Enea","Bastianini", 11, NULL),
	("Paul", "Fernandez",10, 7)
    ;

