const mysql = require('mysql')

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'list_contacts_api_db'
})

module.exports = {
    connectionPool
}