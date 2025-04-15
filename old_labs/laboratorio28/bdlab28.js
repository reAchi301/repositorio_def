const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'laboratorio_15',
    password: '',
});

module.exports = pool.promise();
                  