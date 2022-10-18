module.exports = {
    mainPrompt : [
        {
            type : 'rawlist',
            name : 'menuAction',
            message: 'What would you like to do?',
            choices :[
                'View all employees',
                'View all employees by department',
                'View all employees by manager',
                'Add Employee',
                'Remove Employee',
                'Update employee role',
                'Update employee manager',
                'Exit'
            ]
        }
    ],
    
    // Questions for add employee
    addEmployee: [
        {
            type: 'input',
            name: 'firstName',
            message: "Employee's first name?"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Employee's last name?"
        }
    ]

};