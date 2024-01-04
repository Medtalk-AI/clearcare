const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5500
const path = require('path')
app.use(cors())

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../build")

app.use(express.static(buildPath))
app.get("/*", function(req, res) {
  res.sendFile(
    path.join(__dirname, "../build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  )
})

const UserRoute = require('./routes/users')

mongoose.connect(process.env.DB)
  .then(() => console.log('Database connected.'))
  .catch((err) => console.log(err))

app.use('/', UserRoute)

app.listen(PORT, () => console.log('Server connected.'))