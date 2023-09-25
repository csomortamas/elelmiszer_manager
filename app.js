var express = require('express')
var app = express()

app.get('/', (req, res, next) => {
    res.send('Hello World')
})

var server = app.listen(3000, () => {
    console.log('Running on localhost:3000')
})