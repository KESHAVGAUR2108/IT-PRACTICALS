var mysql = require('mysql')

var con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'keshav21@'
})

con.connect(function (err) {
    if (err)
        throw err;
    var database = 'create database if not exists itlab11;'
    con.query(database, function (err) {
        if (err)
            throw err;
        console.log("Database created successfully.")
    })
})