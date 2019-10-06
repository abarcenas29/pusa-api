const express = require('express')

const helpers = require('./../helpers/response')
const StoreMethods = require('./../methods/stores')

const StoreRouters = express.Router()

StoreRouters
  .route('/stores')
  .post((req, res) => {
    const { action, ...rest } = req.body
    switch (action) {
      case 'create':
        return StoreMethods
          .createStores(rest)
          .then(o => {
            res.json(helpers.wrapper(o))
          })
        break
      case 'query':
        return StoreMethods
          .findStores(rest)
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
    StoreMethods
      .updateStores(req.body)
      .then(o => {
        res.json(helpers.wrapper(o))
      })
  })
  .delete((req, res) => {
    StoreMethods
      .deleteStores(req.query)
      .then(output => {
        res.json(output)
      })
  })


module.exports = StoreRouters
