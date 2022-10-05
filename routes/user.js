const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {

    var reg_user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })

    try{
        const savedUser = await reg_user.save()
        res.json(reg_user)
    }catch(err) {
        res.send('Error' + err);
    }

})

router.patch('/:id', async(req, res) => {
    try{
            const user = await User.findById(req.params.id)
            user.name = req.body.name
            const updated_user = await user.save()
            res.json(updated_user)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router

