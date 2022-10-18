const connection = require('./connection');
const { prompt } = require("inquirer");
class DB {

    constructor(connection) {
        this.connection = connection;
    }

    // view all employees by deparment
    viewEmployeesByDepartment() {
        return this.connection.query(
            `SELECT
                e1.id AS ID,
                e1.first_name AS First_Name,
                e1.last_name AS Last_Name,
                role.title AS Role,
                department.name AS Department,
                CONCAT(e2.first_name, ' ', e2.last_name) AS Manager,
                role.salary AS Salary
            FROM
                employee e1
            LEFT JOIN
                role ON e1.role_id = role.id
            LEFT JOIN
                employee e2 ON e1.manager_id = e2.id
            LEFT JOIN department ON role.department_id = department.id
            ORDER BY
                department.name;`
        );
    }

    // View employee my manager.
    viewAllEmployeesByManager() {
        return this.connection.query(
            `SELECT
                e1.id AS ID,
                e1.first_name AS First_Name,
                e1.last_name AS Last_Name,
                role.title AS Role,
                department.name AS Department,
                CONCAT(e2.first_name, ' ', e2.last_name) AS Manager,
                role.salary AS Salary
            FROM
                employee e1
            LEFT JOIN
                role ON e1.role_id = role.id
            LEFT JOIN
                employee e2 ON e1.manager_id = e2.id
		    LEFT JOIN department ON role.department_id = department.id
		    ORDER BY
                e1.manager_id;`
        );
    }

    // Add employee 
    addEmployee(firstName, lastName, roleId, managerId) {
        try {
            this.connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: `${firstName}`,
                    last_name: `${lastName}`,
                    role_id: `${roleId}`,
                    manager_id: `${managerId}`,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(
                        `\nSuccessfully added employee`
                    );
                    return res;
                }
            );
        } catch (err) {
            console.log("Error inserting role : " + err);
        }
    }

    // remove employee
    removeEmployee(empId) {
        try {
            this.connection.query(
                "DELETE FROM employee WHERE ?",
                [
                    {
                        id: empId,
                    }
                ],
                function (error) {
                    if (error) throw error;
                    console.log(`\nRemoved employee with id : ${empId} successfully!`);
                }
            );
        } catch (error) {
            if (error) throw error;
        }
    }

     // View all employees.
	viewAllEmployees() {
		return this.connection.query(
			`SELECT
                e1.id AS ID,
                e1.first_name AS First_Name,
                e1.last_name AS Last_Name,
                role.title AS Role,
                department.name AS Department,
                CONCAT(e2.first_name, ' ', e2.last_name) AS Manager,
                role.salary AS Salary
            FROM
                employee e1
            LEFT JOIN
                role ON e1.role_id = role.id
            LEFT JOIN
                employee e2 ON e1.manager_id = e2.id
		    LEFT JOIN department ON role.department_id = department.id
		    ORDER BY
                e1.id;`
		);
    }
    // Close database connection
    closeConnection() {
        try {
            this.connection.end();
        } catch (error) {
            console.log("Error closing connection : " + error);
        }
    }

}

module.exports = new DB(connection);