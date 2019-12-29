
const bcrypt = require('bcrypt');
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

chirpdb.create = async (data) => {
    await bcrypt.hash(data.senha, 10, function(err, hash) {
        console.log(hash)
        data.senha = hash

        return new Promise((resolve, reject) => {
            pool.query("INSERT into users SET ?",data, (err, results) => {
                if(err){
                    return reject(err)
                }
    
                return resolve(results)
            })
        })
    });
}

chirpdb.login = (data) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM users WHERE email = ?",[data.name], (err, results) => {
            if(err){
                return reject(err)
            }

            if(results.length != 0 ){
                console.log(data.senha, results.name)
                bcrypt.compare(data.senha, results.senha, function(err, res) {
                    if(res) {
                     // Passwords match
                     console.log('true')
                    } else {
                     // Passwords don't match
                     console.log('false')
                    } 
                  });
                return resolve(results)
            }else{
                return resolve({ 'erro': 'usuario nao exixtes'})
            }
        })
    })
}

module.exports = chirpdb