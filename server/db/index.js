const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'sokanellas2',
    user: 'sokanellas',
    database: 'banco_app_shygo',
    host: 'mysql669.umbler.com',
    port: '41890'
})

let chirpdb = {}

chirpdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users', (err, results) => {
            if(err){
                return reject(err)
            }

            return resolve(results)
        })
    })
}

chirpdb.create = (data) => {
    return new Promise((resolve, reject) => {
        pool.query("INSERT into users SET ?",data, (err, results) => {
            if(err){
                return reject(err)
            }

            return resolve(results)
        })
    })
}

chirpdb.login = (data) => {
    console.log(data)
}

module.exports = chirpdb