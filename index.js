
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API well 🥳 nooooo')
})

app.get('/about', (req, res) => {
  res.send('This is my about route... hhhahahahahaha.. mpejeje guko ikindi hhh ')
})

module.exports = app