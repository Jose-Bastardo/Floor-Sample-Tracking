const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors')

const connection = mysql.createPool({
    host     : 'flrbrds-instance-1.ciuv26ztpehr.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'password',
    database : 'flrbrds'
});

// Starting our app.
const app = express();

app.use(cors())

// Creating a GET route that returns data from the 'users' table.
app.get('/samples', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('select Sample.Checkout_ID, Type.Sam_Type, Sample.Sam_RemoveDate, Sample.Sam_ReturnDueDate, Customer.Cus_First, Customer.Cus_Last\n' +
            'from Sample\n' +
            'left join Type\n' +
            'on Sample.Sam_ID = Type.Sam_ID\n' +
            'left join Customer\n' +
            'on Sample.Cus_ID = Customer.Cus_ID', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
});
