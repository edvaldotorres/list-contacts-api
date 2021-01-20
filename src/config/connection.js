const mysql = require('mysql')

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soft_makers_contact_db'
})

module.exports = {
    connectionPool
}