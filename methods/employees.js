const Employees = require('./../models/Employees')

module.exports = {
  createEmployees: args => {
    return Employees.create(args)
  },
  findEmployees: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)

    return Employees.findAndCountAll(args)
  },
  updateEmployees: args => {
    const options = args.options || {}
    delete args.options
    return Employees
      .update(args, options)
  },
  deleteEmployees: args => {
    return Employees.destroy({
      where: args
    })
  }
}