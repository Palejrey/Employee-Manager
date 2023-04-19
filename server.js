const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
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
            name: 'choices',
            choices: ["Update Employee Role","View All Roles","Add Role","View All Departments","Quit","View All Employees"],
        }
    ]);