require('dotenv').config() 
const express = require('express')
const app = express()
const cors = require('cors')
const indexRouter = require('./routes/index.js')

 app.use(express.static('public'))
app.use(cors())
app.use('/', indexRouter)




const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port 3000`)
})
