const Times = require('./../models/Times')

module.exports = {
  createTimes: args => {
    return Stores.create(args)
  },
  findTimes: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)

    return Stores.findAndCountAll(args)
  },
  updateTimes: args => {
    const options = args.options || {}
    delete args.options
    return Stores
      .update(args, options)
  },
  deleteTimes: args => {
    return Stores.destroy({
      where: args
    })
  }
}
