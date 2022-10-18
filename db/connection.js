'use strict';
const util = require('util');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    //username
    user : 'ashwinilh',
    //password
    password : 'mysqlpass',
    // database name to connect with
    database : 'employee_tracker_db'
});

connection.connect(function(err){
    if(err) throw err;
});