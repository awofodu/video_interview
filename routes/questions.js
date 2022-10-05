const express = require('express')
const router = express.Router()
const User = require('../models/question')

router.get('/', async(req, res) => {
    try{
        const users = await User.find()
        res.send('What is your name?')
    }catch(err) {
        res.send('Error' + err)
    }
})

module.exports = router

