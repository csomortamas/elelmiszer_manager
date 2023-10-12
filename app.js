var express = require('express')
var app = express()

// Load routing
require('./route/index')(app)

app.get('/', (req, res, next) => {
    console.log('hello world')
    res.send('Hello World')
})

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

var server = app.listen(3000, () => {
    console.log('Running on localhost:3000')
})