const crypto = require('crypto')

const Users = require('./../models/Users')

module.exports = {
  createUsers: args => {
    return Users.create(args)
  },
  findUsers: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)

    return Users.findAndCountAll(args)
  },
  updateUsers: args => {
    const options = args.options || {}
    delete args.options
    return Users
      .update(args, options)
  },
  deleteUsers: args => {
    return Users.destroy({
      where: args
    })
  },
  loginUsers: args => {
    return Users.findOne(args)
  }
}
