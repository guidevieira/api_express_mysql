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
    console.log('aki')
    // return new Promise((resolve, reject) => {
    //     pool.query('SELECT * FROM users', (err, results) => {
    //         if(err){
    //             return reject(err)
    //         }

    //         return resolve(results)
    //     })
    // })
}

module.exports = chirpdb