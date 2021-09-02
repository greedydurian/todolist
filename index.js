const express = require('express')
const bodyParser = require('body-parser')
const {body, validationResult} = require('express-validator')
const app = express()
const port = 3000

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/newbase.css', function(req, res){
    res.sendFile(__dirname + "/newbase.css")
  })

app.get('/localstorage.js', function(req, res){
    res.sendFile(__dirname + "/localstorage.js")
  })
  
app.get('/savefile.js', function(req, res){
    res.sendFile(__dirname + "/savefile.js")
  })

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })