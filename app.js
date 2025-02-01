require('dotenv').config() 
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const indexRouter = require('./routes/index.js')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(express.static('public'))
app.use(cors())
app.use('/', indexRouter)




const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port 3000`)
})
