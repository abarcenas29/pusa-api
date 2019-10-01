const Sequelize = require('sequelize')

const connection = require('./index')
const Model = Sequelize.Model


class Times extends Model {}

Times.init({
  uid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  time_log_type: Sequelize.ENUM('time_in', 'time_out'),
  time_log: {
    type: Sequelize.DATE,
    allowNull: false
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  long: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  created_by: {
    type: Sequelize.UUID,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'times'
})

module.exports = Times