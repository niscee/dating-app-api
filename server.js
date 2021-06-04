const express = require('express')
const app = express()
const sequelize = require('./database')
const User = require('./model/User')



// checking database.
const testDb = async() => {
    const result = await sequelize.sync()
    console.log("Database Connected.")
}
testDb();


// body parser middleware.
app.use(express.json({ extended:false }));




// auth routes.
app.use('/user', require('./routes/User'))

// interest operation.
app.use('/interest', require('./routes/Interest'))

// User Profile, UserInterest Operations.
app.use('/profile', require('./routes/Profile'))







// running server.
const port = 5000
app.listen(port, () => {
  console.log(`Running Server On Port: http://localhost:${port}`)
})


