const express = require('express')

const EmployeeMethods = require('./../methods/employees')
const helpers = require('./../helpers/response')

const EmployeeRouters = express.Router()

EmployeeRouters
  .route('/employees')
  .post((req, res) => {
    const {action, ...rest} = req.body
    switch (action) {
      case 'create':
        return EmployeeMethods
          .createEmployees(rest)
          .then(o => {
            res.json(helpers.wrapper(o))
          })
      case 'query':
        return EmployeeMethods
          .findEmployees(rest)
          .then(o => {
            res.json(
              helpers.wrapper(o) || 
              helpers.wrapper({ error: 'Error retrieving list'})
            )
          })
      default:
        return helpers.wrapper({error: 'Invalid query'})
    }
  })
  .put((req, res) => {
    EmployeeMethods
      .updateEmployee(req.body)
      .then(output => {
        res.json(output)
      })
  })
  .delete((req, res) => {
    EmployeeMethods
      .deleteEmployee(req.query)
      .then(output => {
        res.json(output)
      })
  })


module.exports = EmployeeRouters

