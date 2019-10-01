const express = require('express')
const StoreMethods = require('./../methods/stores')

const StoreRouters = express.Router()

StoreRouters
  .route('/store')
  .get((req, res) => {
    StoreMethods
      .findStore(req.query)
      .then(output => {
        res.json(output)
      })
  })
  .post((req, res) => {
    StoreMethods
      .createStore(req.body)
      .then(output => {
        res.json(output)
      })
  })
  .put((req, res) => {
    StoreMethods
      .updateStore(req.body)
      .then(output => {
        res.json(output)
      })
  })
  .delete((req, res) => {
    StoreMethods
      .deleteStore(req.query)
      .then(output => {
        res.json(output)
      })
  })


module.exports = StoreRouters
