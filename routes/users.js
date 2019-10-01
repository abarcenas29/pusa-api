const express = require('express')

const UserMethods = require('./../methods/users')
const UserRouters = express.Router()

UserRouters
  .route('/users')
  .get((req, res) => {
    UserMethods
      .findUsers(req.query)
      .then(output => {
        res.json(output)
      })
  })
  .post((req, res) => {
    UserMethods
      .createUsers(req.body)
      .then(output => {
        res.json(output)
      })
  })
  .put((req, res) => {
    UserMethods
      .updateUsers(req.body)
      .then(output => {
        res.json(output)
      })
  })
  .delete((req, res) => {
    UserMethods
      .deleteUsers(req.query)
      .then(output => {
        res.json(output)
      })
  })


module.exports = UserRouters
