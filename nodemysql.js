// var mysql = require('mysql');
// const express = require('express');
// const bodyParser = require('body-parser')

// var app = express()

// app.use(bodyParser.json())

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "xzSutlej@25",
//     database : 'shany',
//     multipleStatements: true
// });

// con.connect((err) => {
//     if(!err){
//         console.log('Connected')
//     }else {
//         console.log('Failed')
//     }
// })

// app.listen(3000)

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "xzSutlej@25",
 // database: 'shany'
  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//Create Database
  con.query("CREATE DATABASE loanapp", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

//Create Table
  // var sql = "CREATE TABLE new (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
});