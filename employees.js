const mysql = require("mysql");
const inquirer = require("inquirer");
const {MySQL} = require("mysql-promisify");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  password: "Winter01",
  database: "employee_DB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  startQuery();
});

//
const startQuery = () => {
  inquirer
    .prompt({
      type: "list",
      name: "startChoice",
      message: "Select an option to begin: ",
      choices: [
        "Add Department",
        "Add Employees",
        "Add Roles",
        "View Employees",
        "View Role",
        "View Department",
        "Update Employee",
        "Update Role",
        "Update Employee Managers",
        "Delete Employee",
        "Delete Role",
        "Delete Department",
        "View Total Budget of Department",
        "Exit",
      ],
    })
    .then((userChoice) => {
      switch (userChoice.startChoice) {
        case "Add Department":
          addDepartment();
          break;

        case "Add Employees":
          addEmployee();
          break;

        case "Add Roles":
          addRoles();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "View Role":
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

        case "Exit":
          connection.end();
          break;
      }
    });
};
const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "departmentName",
      message: "Add department name: ",
    })
    .then((answer) => {
      console.log(answer.departmentName);
      query = `INSERT INTO Department (name) VALUES ('${answer.departmentName}')`;
      connection.query(query, (err, res) => {
        if (err) throw err;
      });
      startQuery();
    });
};



const addEmployee = async () => {
  connection.query("SELECT * FROM Role", (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "input employee first name: ",
        },

        {
          type: "input",
          name: "lastName",
          message: "input employee last name: ",
        },

        {
          type: "list",
          name: "roleId",
          choices() {
            return res.map(({ id, title }) => {
              return { name: title, value: id };
            });
          },
          message: "Add employee role: ",
        },

        {
        type:"list" ,
        name: 'Manager',
        message: 'Select Manager below: ',
        async choices() {
            return await getAllManagers();
        }
        }
      ])
      .then((answer) => {
        query = `INSERT INTO Employee (first_name, last_name, role_id, manager_id) \
        VALUES(${answer.firstName}, ${answer.lastName}, ${answer.roleId}, ${answer.managerId})`;
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.table(res);
        });
        startQuery();
      });
  });
};

//function so as to loop through manager options
const getAllManagers = async () => {
    let managers = [];
    queryStatement = "SELECT concat(first_name, ' ', last_name) as Manager FROM Employee where manager_id=id";
    const { results } = await connection.query({sql: queryStatement});
    results.forEach(({Manager}) => managers.push(Manager));
    return managers;
  };


const addRoles = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Input new job title: ",
    },
    {
      type: "input",
      name: "title",
      message: "Input new job title: ",
    },
    {
      type: "input",
      name: "department",
      message: "Input new job title: ",
    },
  ]);
};

const viewEmployees = () => {
  query =
    "SELECT a.first_name, a.last_name, Role.title, Role.salary, Department.department, concat(b.first_name, ' ', b.last_name) AS manager \
         FROM Employee a \
         JOIN Role on Role.id=a.role_id \
         JOIN Department on Role.department_id=Department.id \
         JOIN Employee b on a.manager_id=b.id";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });

  startQuery();
};

const viewRole = () => {
  query = "SELECT * FROM Role";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  startQuery();
};

// const getAllManagers = () => {
//     let managers = []
//     query = "SELECT concat(first_name, ' ', last_name) as Manager FROM Employee where manager_id=id";
//     connection.query(query, (err, res) => {
//       if (err) throw err;
//       res.forEach(({Manager}) => managers.push(Manager))
//       return res;
//     });
//   };

const updateEmployee = () => {};

const updateRole = () => {};

const updateEmployeeManager = () => {};

const deleteEmployee = () => {};

const deleteRole = () => {};

const deleteDepartment = () => {};

const departmentBudget = () => {};
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

