const express = require('express')


const helpers = require('./../helpers/response')
const UserMethods = require('./../methods/users')
const UserRouters = express.Router()

UserRouters
  .route('/users')
  .post((req, res) => {
    const { action, ...rest } = req.body
    switch (action) {
      case 'create':
        return UserMethods
          .createUsers(rest)
          .then(o => {
            res.json(helpers.wrapper(o))
          })
        break
      case 'query':
        return UserMethods
          .findUsers(rest)
          .then(o => {
            res.json(
              helpers.wrapper(o) || 
              helpers.wrapper({ error: 'Error retrieving list'})
            )
          })
        break
      default:
        return helpers.wrapper({error: 'Invalid query'})
        break
    }
  })
  .put((req, res) => {
    UserMethods
      .updateUsers(req.body)
      .then(output => {
        res.json({
          data: output
        })
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
