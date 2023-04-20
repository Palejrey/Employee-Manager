const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '2001Qazwsx!',
        database: 'department_db'
    },
    console.log('Connected to the department_db database.')
);

app.use((req,res) => {
 res.status(404).end();
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});


inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do ?',
            name: 'options',
            choices: ["View All Departments","View All Roles","View all Employee","Add a Department","Add a Role","Add an Employee","Update an Employee Role","Quit"],
        }
    ])
    .then((response) =>{
        switch(response.options){
            case 'View All Departments':
                db.query('SELECT * FROM department_db.department', function (err, results) {
                    console.table(results);
                });
            break;

            case'View All Roles':
                db.query('SELECT * FROM department_db.role', function (err, results) {
                    console.table(results);
                 });
            break;

            case'View all Employee':
            db.query('SELECT * FROM department_db.employee', function (err, results) {
                console.table(results);
            });
            break;

            case'Add a Department':
                console.log("WIP");
            break;

            case'Add a Role':
                console.log("WIP");
            break;

            case'Add an Employee':
                console.log("WIP");
            break;

            case'Update an Employee Role':
                console.log("WIP");
            break;

            case'Quit':
                console.log("WIP");
                break;
        }
    });
