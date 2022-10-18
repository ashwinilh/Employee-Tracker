const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const prompts = require("./prompts");
const db = require("./db");
require("console.table");

async function mainPrompt(){

    const { menuAction } = await inquirer.prompt(prompts.mainPrompt);

        switch(menuAction){
            case 'View all employees':
                viewAllEmployees();
                break;

            case 'View all employees by department':
                viewEmployeesByDepartment();
                break;

            case 'View all employees by manager':
                viewAllEmployeesByManager();
                break;

            case 'Add Employee' :
                break;

            case 'Remove Employee':
                break;

            case 'Update employee role':
                break;

            case 'Update employee manager':
                break;

            case 'Exit':
                db.closeConnection();
                console.log("Connection closed!");
                break;
        }
}

// View all employees
async function viewAllEmployees() {
	const empData = await db.viewAllEmployees();
	console.log("\n");
	console.table(empData);
	mainPrompt();
}

// View all employees by manager
async function viewAllEmployeesByManager() {
	const empData = await db.viewAllEmployeesByManager();
	console.log("\n");
	console.table(empData);
	mainPrompt();
}

// View all departments 
async function viewAllDepartments() {
	const departments = await db.viewAllDepartments();
	console.log("\n");
	console.table(departments);
	mainPrompt();
}



function init() {

	//logo
	console.log(
		logo({
			name: 'Employee Management System',
			font: 'Standard',
			lineChars: 10,
			padding: 3,
			margin: 4,
			borderColor: 'bold-yellow',
			logoColor: 'bold-red',
		})
		.emptyLine()
		.render()
	);

	// Called mainPrompt
	mainPrompt();
}

init();