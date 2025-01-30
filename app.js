const express = require('express')
const app = express()
const port = 3000
const {urlencoded} = require('body-parser')
const cors = require('cors')

app.use(urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})



const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
