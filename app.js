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

  connection.connect(function(err) {
    if (err) throw err
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
        'View Deparments',
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
  ]).then(function(res){
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
  // console.log('addDepts!')
}

const addRoles = () => {
  // console.log('addRoles!')
}

const addEmployees = () => {
  // console.log('addEmployees!')
}

// Fxns to viewDepts, viewRoles, viewEmployees
const viewDepts = () => {
  // console.log('viewDepts!')
}

const viewRoles = () => {
  // console.log('viewRoles!')
}

const viewEmployees = () => {
  // console.log('viewEmployees!')
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