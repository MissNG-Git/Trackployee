# Unit 12 MySQL Homework: Employee Tracker

⋘ ──── ∗⋅◦∘◈\[[MissNG Trackployee](#mock-up)\]◈∘◦⋅∗ ──── ⋙

Trackployee is a command line CMS (aka **C**ontent **M**anagement **S**ystems interface) which allows company's to easily manage their employee database. It will allow an orgnisation to easily view & interact with employee information stored within the database.

Technologies utilised include...
+ [Visual Studio Code](https://code.visualstudio.com/) -- Source-code editor
+ Javascript (JS) -- ECMAScript programming language
+ [GitBash](https://gitforwindows.org/) -- BASH emulator for GIT commands
+ [Node](https://nodejs.org/en/about/) -- JS runtime environment
+ [Express.js Framework](https://expressjs.com/) -- Back-end framework for Node.js
+ [MySQL Database](https://www.mysql.com/) -- Database management system
+ [Inquirer package](https://www.npmjs.com/package/inquirer) -- Command line interface for Node.js
+ [Console Table package](https://www.npmjs.com/package/console.table) -- Allows array of objects to display as a table in console

## ≫ ──── ≪•◦ Objectives ◦•≫ ──── ≪
```
+ Assist companies & business owners in maintaining employee files
+ Allow user to view and manage departments, roles & employees within the company
+ Provides CMS that allows user to organise & plan business
```

## Mock-Up

The following image demonstrates the application functionality:

EXAMPLE:
<p float="left">
    <img src="/Assets/schema.png" alt="Database Schema" width="200"/>
    <img src="/Assets/employee-tracker.gif" alt="Employee Tracker" width="200"/>
</p>

DEMO:
![Trackployee Demo](./assets/demoTrackployee.gif)

### ≫ ──── ≪•◦ Overview of Code Functionality ◦•≫ ──── ≪

1. Command-line application allow users to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

2. Application correctly executes the selected user action & either initiates further prompts to register user input (add) OR displays selected data set (view) OR initiates further prompts to overwrite existing employee roles (update).

3. BONUS Functionality: Application also allow users to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilised budget of a department -- ie the combined salaries of all employees in that department

4. Application can additionally execute bonus actions &either remove selected data (delete) OR advise department budget(view).

5. Application utilises [MySQL](https://www.mysql.com/) to generate a database for tables creation & data reference.

6. Application successfully performs SQL JOINS to display accurate table data, in conjuction with npm's [console.table package](https://www.npmjs.com/package/console.table).

### ≫ ──── ≪•◦ Usability ◦•≫ ──── ≪

* Create a clone of [this repository](https://github.com/MissNG-Git/Trackployee)

* Navigate to directory containing cloned repository

* Install the required dependencies by running
```
npm install
```

* Create the database using these SQL files: [Schema](db/schema.sql) & [Seed](db/seed.sql)

* Invoke the application by running this command in GitBash/Terminal
```
node app.js
```

* Answer the prompts displayed in terminal and application will execute desired action accordingly (add, view, update, delete or exit application)