const connection = require('./connection');
const { prompt } = require("inquirer");
function init() {
    console.log(“Employees, Departments, and Roles Interface”)
    loadPrompts();
   }
   
   closeConnection(){
    try{
        this.connection.end();
    }
    catch(error){
        console.log("Error closing connection : "+error);
    }      
}
}

module.exports = new DB(connection);