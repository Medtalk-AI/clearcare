const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5500

app.use(cors())

const UserRoute = require('./routes/users')

mongoose.connect(process.env.DB)
  .then(() => console.log('Database connected.'))
  .catch((err) => console.log(err))

app.use('/', UserRoute)

app.listen(PORT, () => console.log('Server connected.'))