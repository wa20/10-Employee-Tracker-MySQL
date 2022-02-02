require("dotenv").config();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const logo = require("asciiart-logo");

// const {MySQL} = require("mysql-promisify");


//connect to localhost schema
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  // startQuery();
});


// console log start logo
startLogo();
function startLogo() {
  const logoText = logo({ name: "Management Module" }).render();
  console.log(logoText);
}



// start Query
const startQuery = () => {
  inquirer
    .prompt({
      type: "list",
      name: "selectChoice",
      message: "Select an option to begin: ",
      choices: [
        // views
        "View Employees",
        "View Role",
        "View Department",
        "View Total Budget of Department",

        // add
        "Add Department",
        "Add Employees",
        "Add Roles",

        // update
        "Update Employee",
        "Update Role",
        "Update Employee Managers",
        // delete
        "Delete Employee",
        // "Delete Role",
        // "Delete Department",
        "Exit",
      ],
    })
    .then((userChoice) => {
      switch (userChoice.selectChoice) {
        // views
        case "View Employees":
          viewEmployees();
          break;

        case "View Role":
          viewRole();
          break;

        case "View Department":
          viewDepartment();
          break;

        // case "View Total Budget of Department":
        //   departmentBudget();
        //   break;

        // add
        case "Add Department":
          addDepartment();
          break;

        case "Add Employees":
          addEmployee();
          break;

        case "Add Roles":
          addRoles();
          break;

        // update
        case "Update Employee":
          updateEmployee();
          break;

        case "Update Role":
          updateRole();
          break;

        // case "Update Employee Managers":
        //   updateEmployeeManager();
        //   break;

        // delete
        // case "Delete Employee":
        //   deleteEmployee();
        //   break;

        // case "Delete Role":
        //   deleteRole();
        //   break;

        // case "Delete Department":
        //   deleteDepartment();
        //   break;

        case "Exit":
          connection.end();
          break;
      }
    });
};

// Add segment ================================================================================

// add department
const addDepartment = () => {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "Add department name:",
    })
    .then((answer) => {
      const query = connection.query(
        "INSERT INTO department SET ?",
        answer,
        (err, res) => {
          if (err) throw err;
          console.log(`${answer.department} has been added!`);
          startQuery();
        }
      );
    });
};

//add employee
const addEmployee =  () => {
  connection.query(
    "SELECT Employee.first_name, Employee.last_name, Employee.id, Role.title, Role.id FROM Employee LEFT JOIN Role ON Employee.id = Role.id;",
    // "SELECT * FROM employee, role WHERE role.id = role_id ",

    (err, res) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "input employee first name: ",
          },

          {
            type: "input",
            name: "last_name",
            message: "input employee last name: ",
          },

          {
            type: "list",
            name: "role_id",
            choices() {
              return res.map(({ id, title }) => {
                return { name: title, value: id };
              });
            },
            message: "Add employee role: ",
          },

          {
            type: "list",
            name: "manager_id",

            choices() {
              return res.map(({ first_name, last_name, id }) => {
                return { name: first_name + " " + last_name, value: id };
              });
            },
            message: "Select Manager below: ",
          },
        ])
        .then((answer) => {
          connection.query("INSERT INTO Employee SET ?", answer, (err, res) => {
            if (err) throw err;
            console.log(
              `${answer.first_name} ${answer.last_name} has been added!`
            );
          });
          startQuery();
        });
    }
  );
};

// add Role
const addRoles = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "Input new job title: ",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the role salary?: ",
        },

        {
          type: "list",
          name: "department_id",
          choices() {
            return res.map(({ department_id, department }) => {
              return { name: department, value: department_id };
            });
          },
          message: "Select which department the role will sit under?:",
        },
      ])
      .then((answer) => {
        const query = connection.query(
          "INSERT INTO role SET ?",
          answer,
          (err, res) => {
            if (err) throw err;
            console.log(`${answer.title} has been added!`);
            startQuery();
          }
        );
      });
  });
};

//views sections======================================================================================

// view employees
const viewEmployees = () => {
  query =
    "SELECT a.first_name, a.last_name, Role.title, Role.salary, Department.department_id, concat(b.first_name, ' ', b.last_name) AS manager \
    FROM Employee a \
    JOIN Role on Role.id=a.role_id \
    JOIN Department on Role.department_id=Department.department_id \
    JOIN Employee b on a.manager_id=b.id";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });

  startQuery();
};

//view role
const viewRole = () => {
  query = "SELECT * FROM Role";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  startQuery();
};

//view department
const viewDepartment = () => {
  query = "SELECT * FROM Department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  startQuery();
};

//update sections======================================================================================

//update Role
function updateRole() {
  return connection.query(
    "SELECT Employee.first_name, Employee.last_name, Employee.id, Role.title, Role.id FROM Employee LEFT JOIN Role ON Employee.id = Role.id;",

    (err, res) => {
      inquirer
        .prompt([
          {
            name: "employee",
            type: "list",
            choices() {
              return res.map(({ first_name, last_name, id }) => {
                return { name: first_name + " " + last_name, value: id };
              });
            },
            message: "Select Employee to update: ",
          },
          {
            name: "role",
            type: "list",
            choices() {
              return res.map(({ id, title }) => {
                return { name: title, value: id };
              });
            },
            message: "Select new employeee role: ",
          },
        ])
        .then((answer) => {
          connection.query(
            "UPDATE employee SET ? WHERE ?",
            [
              {
               role_id: answer.role,
              },
              {
                id: answer.employee,
              },
            ],
            function (err, res) {
              if (err) throw err;
              console.log(`The ${answers.employee}'s Role has been updated.`);
              startQuery();
            }
          );
        });
    }
  );
}


//update Employee
const updateEmployee = () => {
  return connection.query(
    "SELECT Employee.first_name, Employee.last_name, employee.id, role.title, role.id FROM Employee LEFT JOIN Role ON EMployee.id = Role.id",

    (err, res) => {
      inquirer.prompt([
        {
          name: "employee",
          type: "list",
          choices() {
            console.log("response console log",res);
            return res.map(( {first_name, last_name, id}) => {
              return { name: first_name + " " + last_name, value: id };
            });
          },
          message: "select employee to update ",
        },
        {
          name: "role",
          type: "list",
          choices() {
            return res.map(({ id, title }) => {
              return {name: title, value: id}
            });
          },
          message: "select new role"
        },
      ]).then((answer) => {
        connection.query(
          "UPDATE  employee SET ? WHERE ?",
          [{
            role_id: answer.role,
          },
        {
          id: answer.employee
        }],
          function (err, res){
            if (err) throw err;
            console.log(`the ${answer.employee} role has been updated`)
            startQuery();
          }
        )
      })
    }
  );
};


// const updateEmployeeManager = () => {};

//delete sections======================================================================================

// const deleteEmployee = () => {};
function deleteEmployee() {
  return connection.query(
    "SELECT a.first_name, a.last_name, Role.title, Role.salary, Department.department_id, concat(b.first_name, ' ', b.last_name) AS manager \
    FROM Employee a \
    JOIN Role on Role.id=a.role_id \
    JOIN Department on Role.department_id=Department.department_id \
    JOIN Employee b on a.manager_id=b.id",
    (err, res) => {
    inquirer
      .prompt([
        {
          name: "employee",
          type: "list",
          choices() {
            return res.map(({ id, first_name, last_name }) => {
              return { name: first_name + " " + last_name, value: id };
            });
          },
          message: "Select Employee to remove: ",
        },
      ])
      .then((answer) => {
        connection.query(
          "DELETE FROM Employee WHERE ?",
          [{ id: answer.employee }],
          function (err, res) {
            if (err) throw err;
            console.log(`The employee with the ID ${answer.employee} has been removed.`);
            startQuery();
          }
        );
      });
  });
}


// const deleteRole = () => {};

// const deleteDepartment = () => {};

// const departmentBudget = () => {};

(async () => {
  await startQuery();
})();