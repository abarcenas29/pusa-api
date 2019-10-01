const express = require('express')
const TimesMethods = require('./../methods/times')

const TimeRouters = express.Router()

TimeRouters
  .route('/time')
  .get((req, res) => {
    TimesMethods
      .findTimes(req.query)
      .then(output => {
        res.json(output)
      })
  })
  .post((req, res) => {
    TimesMethods
      .createTimes(req.body)
      .then(output => {
        res.json(output)
      })
  })
  .put((req, res) => {
    TimesMethods
      .updateTimes(req.body)
      .then(output => {
        res.json(output)
      })
  })
  .delete((req, res) => {
    TimesMethods
      .deleteTimes(req.query)
      .then(output => {
        res.json(output)
      })
  })


module.exports = TimeRouters
