const Sequelize = require('sequelize')

const connection = new Sequelize('pusa', 'pusa', '1tp@ssw0rd', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT+8'
  }
})

module.exports = connection
