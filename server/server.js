const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())

app.use('/api', routes)

app.listen(process.env.Port || '3000', () =>{
    console.log('rodo')
})