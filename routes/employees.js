const express = require('express')
const EmployeeMethods = require('./../methods/employees')

const EmployeeRouters = express.Router()

EmployeeRouters
  .route('/employee')
  .get((req, res) => {
    EmployeeMethods
      .findEmployee(req.query)
      .then(output => {
        res.json(output)
      })
  })
  .post((req, res) => {
    EmployeeMethods
      .createEmployee(req.body)
      .then(output => {
        res.json(output)
      })
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

