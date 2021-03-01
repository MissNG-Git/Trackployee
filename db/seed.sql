-- USE DB
USE trackployee_db;

-- Seed data into department, role & employee...
INSERT INTO department 
    (name)
VALUE 
    ("Executive"),
    ("Finance"),
    ("Human Resources"),
    ("Operations"),
    ("Sales");

INSERT INTO role 
    (title, salary, department_id)
VALUE 
    -- Finance
    ("Accountant", 58468, 2),
    -- Exec
    ("CEO", 154863, 1),
    -- Ops
    ("Customer Service Rep", 51226, 4),
    ("Office Manager", 61174, 4), -- M.ID 1
    ("Receptionist", 44536, 4),
    -- HR
    ("Recruiter", 61538, 3),
    -- Sales
    ("Sales Manager", 70000, 5), -- M.ID 2
    ("Salesperson", 54709, 5);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUE 
    ("Bob", "Beau", 4, null), -- Off Mgr
    ("Jane", "Doe", 8, 2),
    ("Jim", "Bob", 5, 1),
    ("Joe", "Schmoe", 2, null), -- CEO
    ("John", "Smith", 1, 1),
    ("Mary", "Jane", 3, 1),
    ("Tom", "Mott", 6, 1),
    ("Yu", "Mi", 7, null); -- Sales Mgr

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;