const express = require('express')
const bodyParser = require('body-parser')

// Routes
const EmployeeRoutes = require('./routes/employees')
const StoresRoutes = require('./routes/stores')
const TimeRoutes = require('./routes/times')
const UserRoutes = require('./routes/users')

// Model
const EmployeeModel = require('./models/Employees')
const StoreModel = require('./models/Stores')
const TimeModel = require('./models/Times')
const UserModel = require('./models/Users')

const port = process.env.PORT || 5000
const app = express()

const modelConfig = {
  logging: console.log
}

// Relations
UserModel.hasMany(EmployeeModel)
UserModel.hasMany(StoreModel)
EmployeeModel.belongsTo(UserModel)
EmployeeModel.hasMany(TimeModel)
StoreModel.belongsTo(UserModel)
EmployeeModel.belongsTo(StoreModel)
TimeModel.belongsTo(EmployeeModel)


UserModel
  .sync(modelConfig)
TimeModel
  .sync(modelConfig)
EmployeeModel
  .sync(modelConfig)
StoreModel
  .sync(modelConfig)


app.use(bodyParser.json())
app.use('/', [
  EmployeeRoutes,
  StoresRoutes,
  TimeRoutes,
  UserRoutes
])

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
