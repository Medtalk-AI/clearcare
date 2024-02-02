const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
  apiKey: process.env.API_KEY,
})

const openai = new OpenAIApi(config)

const app = express()

const PORT = process.env.PORT || 5500
const path = require('path')

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../build")

app.use(express.static(buildPath))
app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  )
})

app.post("/summarize", async (req, res) => {
  const input = req.body.input
  const language = req.body.language
  const completion = await openai.createCompletion({
    model: "gpt-3.5-turbo-instruct",
    max_tokens: 512,
    temperature: 0.5,
    prompt: "You are a medical assistant. Please summarize the following as thoroughly and as concisely as possible, with simple vocabulary, and translate it into " + language + ": " + input + ".",
  })
  console.log(completion.data.choices[0].text)
  res.send(completion.data.choices[0].text)
})

const UserRoute = require('./routes/users')

mongoose.connect(process.env.DB)
  .then(() => console.log('Database connected.'))
  .catch((err) => console.log(err))

app.use('/', UserRoute)

app.listen(PORT, () => console.log('Server connected.'))