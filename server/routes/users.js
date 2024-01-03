const router = require('express').Router()
const userModel = require('../models/users.js')

router.post('/api/user', async (req, res) => {
  try {
    const newUser = new userModel({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email
    })
    const saveUser = await newUser.save()
    res.status(200).json(`User ${saveUser.first} ${saveUser.last} has been added.`)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router