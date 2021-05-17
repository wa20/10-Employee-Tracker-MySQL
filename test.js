const {MySQL} = require("mysql-promisify");
const inquirer = require("inquirer");

const db = new MySQL({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Winter01",
    database: "employee_DB",
    // multipleStatements: true,
  });


//
const startQuery = () => {
  inquirer
    .prompt({
      type: "list",
      name: "startChoice",
      message: "Select an option to begin: ",
      choices: [
        "Add Employees",
        "Exit",
      ],
    })
    .then(async (userChoice) => {
      switch (userChoice.startChoice) {

        case "Add Employees":
          await addEmployee();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
};

const addEmployee = async () => {
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
            message: "Add employee role: ",
            async choices() {
                return await getAllRoles();
            },
        },
        {
        type:"list" ,
        name: 'Manager',
        async choices() {
            return await getAllManagers();

        },
        message: 'Select Manager below: ',

        }
    ])
    .then((answer) => {
        startQuery();
    });
}

const getAllManagers = async () => {
    let managers = [];
    queryStatement = "SELECT concat(first_name, ' ', last_name) as Manager FROM Employee where manager_id=id";
    const { results } = await db.query({sql: queryStatement});
    results.forEach(({Manager}) => managers.push(Manager));
    return managers;
  };

  const getAllRoles = async () => {
    let roles = [];
    queryStatement = "SELECT title FROM Role";
    const { results } = await db.query({sql: queryStatement});
    results.forEach(({title}) => roles.push(title));
    return roles;
  };


(async () => {
    await startQuery();
})();