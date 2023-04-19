const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

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