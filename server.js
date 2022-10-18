const inquirer = require("inquirer");
const prompts = require("./prompts");

function mainPrompt(){

    inquirer.prompt(prompts.mainPrompt)
    .then(function(answer){
        switch(answer.menuAction){
            case 'View all employees':
                break;

            case 'View all employees by department':
                break;

            case 'View all employees by manager':
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
    });
}

mainPrompt();