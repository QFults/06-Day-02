const express = require('express')
const { join } = require('path')
const axios = require('axios')
const app = express()

// app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  const { t, apikey } = req.query
  axios.get(`http://www.omdbapi.com/?t=${t}&apikey=${apikey}`)
    .then(({ data }) => res.json(data))
    .catch(err => console.log(err))
})

app.get('/api/:type/:id', (req, res) => {
  const { type, id } = req.params
  axios.get(`https://swapi.dev/api/${type}/${id}`)
    .then(({ data }) => res.json(data))
    .catch(err => console.log(err))
})

app.listen(3000)
