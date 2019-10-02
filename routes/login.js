const express = require('express')

const UserMethods = require('./../methods/users')

const LoginRouters = express.Router()

LoginRouters
  .route('/login')
  .post((req, res) => {
    return UserMethods
      .loginUsers(req.body)
      .then(output => {
        res.json({data: output || { error: 'Invalid username/password' }})
      })
  })

module.exports = LoginRouters
