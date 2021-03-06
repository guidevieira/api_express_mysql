const express = require('express')
const db = require ('../db')

const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
        let results = await db.all()
        res.json(results)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/register', async(req, res, next) => {
    try{
        let results = await db.create(req.body)
        res.json({ok: 'ok'})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/login', async(req, res, next) => {
    try{
        let results = await db.login(req.body)
        res.json({ok: results})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/addpontos', async(req, res, next) => {
    try{
        let results = await db.addPontos(req.body)
        res.json({ok: results})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/retirada', async(req, res, next) => {
    try{
        let results = await db.retirada(req.body)
        res.json({ok: results})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

module.exports = router