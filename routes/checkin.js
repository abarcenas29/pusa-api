const express = require('express')

const Time = require('./../methods/times')
const helpers = require('./../helpers/response')

const CheckInRouters = express.Router()

CheckInRouters
  .route('/check-in')
  .post((req, res) => {
    const { action, ...args } = req.body
    switch (action) {
      case 'time-in':
        return Time
          .createTimes(req.body)
          .then(o => {
            res.json(helpers.wrapper(o))
          })
        break
      case 'time-out':
        return Time
          .updateTimes(args)
          .then(o => {
            res.json(helpers.wrapper(o))
          })
        break
      default:
        return helpers.wrapper({error: 'Invalid query'})
        break
    }
  })

CheckInRouters
  .route('/check-in/current')
  .post((req, res) => {
    Time
      .findCurrentCheckIn(req.body)
      .then(o => res.json(helpers.wrapper(o)))
  })


module.exports = CheckInRouters
