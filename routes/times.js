const express = require('express')
const TimesMethods = require('./../methods/times')

const helpers = require('./../helpers/response')

const TimeRouters = express.Router()

TimeRouters
  .route('/time')
  .post((req, res) => {
    const { action, ...rest } = req.body
    switch (action) {
      case 'create':
        return TimesMethods
          .createTimes(req.body)
          .then(o => {
            res.json(
              helpers.wrapper(o) || 
              helpers.wrapper({ error: 'Error retrieving list'})
            )
          })
        break
      case 'query':
        return TimesMethods
          .findTimes(req.body)
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
