// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // hide pw w/'npm i maskdata OR hide-secrets'
    password: 'yourRootPassword',
    database: 'employeeDB',
  });

// ** Remember: CRUD! **
// Inquirer: PROMPT questions, THEN view/add data (incl. connection.end())

// Fxns to addDepts, addRoles, addEmployees

// Fxns to viewDepts, viewRoles, viewEmployees

// Fxn to updateRoles


// =================== BONUS ===================
// Fxn to updateMgrs

// Fxn to viewByMgrs

// Fxn to deleteDepts, deleteRoles, deleteEmployees

// Fxn to viewBudget (combined salaries in dept)