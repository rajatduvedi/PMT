var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rajat123',
    database: 'pmt',
    port : 3306,  
});
module.exports = connection;
