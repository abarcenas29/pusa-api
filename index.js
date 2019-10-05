const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Routes
const EmployeeRoutes = require('./routes/employees')
const StoresRoutes = require('./routes/stores')
const TimeRoutes = require('./routes/times')
const UserRoutes = require('./routes/users')
const LoginRoutes = require('./routes/login')

// Model
const EmployeeModel = require('./models/Employees')
const StoreModel = require('./models/Stores')
const TimeModel = require('./models/Times')
const UserModel = require('./models/Users')

const port = process.env.PORT || 5000
const app = express()

const modelConfig = {}

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
  .then(() => {
    UserModel
      .findOrCreate({
        where: {
          email: 'admin@mail.com'
        },
        defaults: {
          address: '123 address st.',
          created_by: '0000',
          email: 'admin@mail.com',
          first_name: 'Admin',
          last_name: 'User',
          password: "1tp@ssw0rd",
          contact_no: '000-000-0000',
          type: 'admin'
        }
      })
  })
TimeModel
  .sync(modelConfig)
EmployeeModel
  .sync(modelConfig)
StoreModel
  .sync(modelConfig)


app.use(cors({
  origin: 'http://localhost:3100'
}))
app.use(bodyParser.json())
app.use('/', [
  EmployeeRoutes,
  LoginRoutes,
  StoresRoutes,
  TimeRoutes,
  UserRoutes
])

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
