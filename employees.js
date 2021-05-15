
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
            'Add Department',
            'Add Employees',
            'Add Roles',
            'View Employees',
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
            case 'Add Department':
                addDepartment();
                break;

            case 'Add Employees':
                addEmployee();
                break;
            
           case 'Add Roles':
                addRoles();
                break;    
                
            case 'View Employees':
                viewEmployees();
                break;

           case 'View Role':
                viewRole();
                break;    
                
            // case 'Update Employee':
            //     updateEmployee();
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
    });

};
const addDepartment = () => {
    inquirer
        .prompt(
        {
        type:"input",
        name: 'departmentName',
        message: 'Add department name: ',
        }
).then((answer) => {
    console.log(answer.departmentName)
    query = `INSERT INTO Department (name) VALUES ('${answer.departmentName}')`
    connection.query(query, (err, res) => {
        if (err) throw err;
    })
    startQuery()   
})

}

const addEmployee = () => {
    inquirer
        .prompt([
        {
        type:"input",
        name: 'firstName',
        message: 'input employee first name: ',
        },

        {
        type:"input" ,
        name: 'lasttName' ,
        message: 'input employee last name: ',
        },

        {
        type:"list" ,
        name: 'roleId' ,
        message: 'Add employee role: ',
        },

        {
        type:"list" ,
        name: 'managerID' ,
        message: 'input employee last name: ',
        }

    ]).then

}

const addRoles = () => {
  
}

const viewEmployees = () => {
query = 'SELECT * FROM Employee;'
connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res)
})

startQuery()   
}


const viewRole = () => {
    
}

const updateEmployee = () => {
    
}

const updateRole = () => {
    
}

const updateEmployeeManager = () => {
    
}

const deleteEmployee = () => {
    
}

const deleteRole = () => {
    
}

const deleteDepartment = () => {
    
}

const departmentBudget = () => {
    
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