// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// Connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // hide pw w/'npm i maskdata OR hide-secrets'
  password: 'yourRootPassword',
  database: 'trackployee_db',
});

connection.connect((err) => {
  if (err) throw err;
  // OR if (err) {console.error(`error connecting: ${err.stack}`); return;}
  console.log(`Connected as ID ${connection.threadId}`);
  startApp();
});

// Inquirer: PROMPT questions, THEN view/add data 
// (incl. connection.end())
const startApp = () => {
  // console.log('hi!')
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'options',
      choices: [
        'Add Departments',
        'Add Roles',
        'Add Employees',
        'View Departments',
        'View Roles',
        'View Employees',
        // 'View Employees by Manager',
        // 'View Department Budget',
        'Update Employee Roles',
        // 'Update Employee Managers'
        // 'Delete Departments',
        // 'Delete Roles',
        // 'Delete Employees',
        'Exit Trackployee'
      ]
    }
  ]).then((res) => {
    switch (res.options) {
      case 'Add Departments': 
        addDepts();
        break;

      case 'Add Roles': 
        addRoles();
        break;

      case 'Add Employees': 
        addEmployees();
        break;
                
      case 'View Departments': 
        viewDepts();
        break;
                
      case 'View Roles': 
        viewRoles();
        break;
                
      case 'View Employees': 
        viewEmployees();
        break;
                
      // case 'View Employees by Manager': 
      //   viewByMgr();
      //   break;
                
      // case 'View Department Budget': 
      //   viewDeptBudget();
      //   break;
                
      case 'Update Employee Roles': 
        updateRoles();
        break;

      // case 'Update Employee Managers': 
      //   updateMgrs();
      //   break;
                
      // case 'Delete Departments': 
      //   deleteDepts();
      //   break;
                
      // case 'Delete Roles': 
      //   deleteRoles();
      //   break;

      // case 'Delete Employees': 
      //   deleteEmployees();
      //   break;

      case 'Exit Trackployee': 
        connection.end();
        break;
    }
  })
}

// ** Remember: Create, Read, Update, Delete! **
// Fxns to addDepts, addRoles, addEmployees
const addDepts = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the [NAME] of the Department you would like to add?',
      name: 'dept'
    }
  ]).then((res) => {
    connection.query(
      `INSERT INTO department (name) VALUES ('${res.dept}')`,
       (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log(`${res.affectedRows} department added!\n`)
        startApp();
      })
    // console.log('-------------------------------------------------------------------------------------')
  })
}

const addRoles = () => {
  connection.query(
    `SELECT * FROM department`, 
    (err, res) => {
      if (err) throw err;

      inquirer.prompt([
        {
          type: 'input',
          message: 'What is the job [TITLE] of the Role would you like to add?',
          name: 'title'
        },

        {
          type: 'number',
          message: 'What is the [SALARY] for this role?',
          name: 'salary'
        },

        {
          type: 'list',
          message: 'What [DEPARTMENT] is this role in?',
          name: 'deptList',
          choices: () => {
            let deptArray = [];
            for (let i = 0; i < res.length; i++) {
            deptArray.push(res[i].name);
            }
            return deptArray;
          }
        }
      ]).then((ans) => {
        let deptID;
        for (let a = 0; a < res.length; a++) {
          if (res[a].name === ans.deptList) {
            deptID = res[a].id;
          }
        }

        connection.query(
          `INSERT INTO role (title, salary, department_id) VALUES ('${ans.title}', '${ans.salary}', '${deptID}')`,
          (err, res) => {
            if (err) throw err;
            console.table(res);
            console.log(`${res.affectedRows} role added!\n`)
            startApp();
          }
        )
        // console.log('-------------------------------------------------------------------------------------')
      });
    }
  )
}
  
const addEmployees = () => {
  connection.query(
    `SELECT * FROM role`,
    (err, res) => {
      if (err) throw err;

      inquirer.prompt([
        {
          type: 'input',
          message: "What is the employee's [FIRST_NAME]?",
          name: 'firstName'
        },

        {
          type: 'input',
          message: "What is the employee's [LAST_NAME]?",
          name: 'lastName'
        },

        {
          type: 'list',
          message: "What is the employee's [ROLE]?",
          name: 'roleList',
          choices: () => {
            let roleArray = [];
            for (let i = 0; i < res.length; i++) {
              roleArray.push(res[i].title);
            }
            return roleArray;
          }
        },

        {
          type: 'input',
          message: "What is the [MANAGER_ID] of this employee's manager, if applicable?",
          name: 'mgrID'
        }
      ]).then((ans) => {
        let roleID;
        for (let a = 0; a < res.length; a++) {
          if (res[a].title === ans.roleList) {
            roleID = res[a].id;
          }
        }
        
        // let managerID;
        // for (let b = 0; b < res.length; b++) {
        //   if (res[b].id === ans.mgrID) {
        //     managerID = res[b].id;
        //   }
        // }

        // fix CONSTRAINT FK REFS issue!
        connection.query(
          `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${ans.firstName}', '${ans.lastName}', '${roleID}', '${ans.mgrID}')`,
          (err, res) => {
            if (err) throw err;
            console.table(res);
            console.log(`${res.affectedRows} employee added!\n`)
            startApp();
          }
        )
        // console.log('-------------------------------------------------------------------------------------')
      });
    }
  )
}

// Fxns to viewDepts, viewRoles, viewEmployees
const viewDepts = () => {
  connection.query(
    `SELECT * FROM department`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  )
  console.log('Viewing Departments!');
}

const viewRoles = () => {
  connection.query(
    `SELECT * FROM role`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  )
  console.log('Viewing Roles!');
}

const viewEmployees = () => {
  connection.query(
    `SELECT * FROM employee`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  )
  console.log('Viewing Employees!');
}

// Fxn to updateRoles
const updateRoles = () => {
  // console.log('updateRoles!')
}


// // =================== BONUS ===================
// // Fxn to updateMgrs
// const updateMgrs = () => {

// }


// // Fxn to viewByMgrs
// const viewByMgr = () => {

// }


// // Fxn to deleteDepts, deleteRoles, deleteEmployees
// const deleteDepts = () => {

// }

// const deleteRoles = () => {

// }

// const deleteEmployees = () => {

// }


// // Fxn to viewBudget (combined salaries in dept)
// const viewDeptBudget = () => {

// }