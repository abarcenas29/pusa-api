const crypto = require('crypto')
const Sequelize = require('sequelize')

const Users = require('./../models/Users')
const Stores = require('./../models/stores')
const Employees = require('./../models/Employees')

module.exports = {
  createUsers: args => {
    const { type } = args
    const Models = Users.create(args)
    
    if (type === 'employee') {
      const { employees, storeUid, created_by } = args
      return Models.then(r => {
        const { dataValues: { uid }} = r
        return Employees.create({
          userUid: uid,
          storeUid,
          created_by,
          ...employees
        })
      })
    }

    return Models
  },
  findUsers: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)

    return Users.findAndCountAll({
      ...args,
      include: [
        Employees
      ]
    })
  },
  updateUsers: args => {
    const options = args.options || {}
    delete args.options

    const Models = Users.update(args, options)

    if(args.type === 'employee') {
      const { rate, shift_start, shift_end } = args.employees
      const newArgs = { rate, shift_start, shift_end }

      return Models.then(() => Employees.update(newArgs, {
        where: {
          userUid: args.uid
        }
      }))
    }

    return Models
  },
  deleteUsers: args => {
    return Users.destroy({
      where: args
    })
  },
  loginUsers: args => {
    return Users.findOne({
      ...args,
      include: [
        {
          model: Stores,
          attributes: ['uid']
        }
      ]
    })
  }
}
