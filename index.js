const express = require('express');
const router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

connection.connect(function(error){
    if(error){
        console.log('Error')
    }else{
        console.log('connected')
    }
});

app.get('/',function(req, resp){
    //about mysql
    connection.query("SELECT * FROM users", function(error,rows,fields){
        if(!!error){
            console.log('ERROR in this query');
        }else{
            console.log('Successful query')
        }

    });
})
app.listen(1337);