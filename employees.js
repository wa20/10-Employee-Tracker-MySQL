
const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',

    password: 'Winter01',
    database: 'employee_DB',

})

connection.connect((err) => {
    if(err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    startQuery();
})

//
const startQuery = () => {
inquirer
    .prompt({
        type:"list" ,
        name: 'startChoice' ,
        message: 'Select an option to begin: ',
        choices: [
            'Add Employees',
            'Add Roles',
            'Add Department',
            'View Employee',
            'View Role',
            'View Department',
            'Update Employee',
            'Update Role',
            'Update Employee Managers',
            'Delete Employee',
            'Delete Role',
            'Delete Department',
            'View Total Budget of Department',
            'Exit'
        ]


    })
    .then((userChoice) => {
        switch (userChoice.startChoice){
            case 'Add Employees':
                addEmployee();
                break;
            
           case 'Add Roles':
                addRoles();
                break;    
                
            case 'Add Department':
                addEmployee();
                break;
                
            case 'View Employee':
                viewEmployee();
                break;

           case 'View Role':
                viewRole();
                break;    
                
            // case 'Update Employee':
            //     updateDepartment();
            //     break;
                
            // case 'Update Role':
            //     updateRole();
            //     break;
        
            // case 'Update Employee Managers':
            //     updateEmployeeManager();
            //     break;
                
            // case 'Delete Employee':
            //     deleteEmployee();
            //     break;

            // case 'Delete Role':
            //     deleteRole();
            //     break;
                
            // case 'Delete Department':
            //     deleteDepartment();
            //     break;

            // case 'View Total Budget of Department':
            //     departmentBudget();
            //     break;
            
            case 'Exit':
                connection.end();
                break;
        }
    })

}

// Add employees

// Add roles

// Add department




// View employee

// View role

// View department



// Update employee

// Upadate role



//Bonus
// Update employee managers

// View employee manager

// Delete departments, roles, and employees

// View the total utilized budget of a departemtn -- combined salaries of all emplyees in that department




console.log("hello node, i'm working")