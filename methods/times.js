const Times = require('./../models/Times')

module.exports = {
  createTimes: args => {
    return Times.create(args)
  },
  findTimes: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)

    return Times.findAndCountAll(args)
  },
  updateTimes: args => {
    const options = args.options || {}
    delete args.options
    return Times
      .update(args, options)
  },
  deleteTimes: args => {
    return Times.destroy({
      where: args
    })
  }
}
