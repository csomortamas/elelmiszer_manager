var express = require('express')
var app = express()

// set ejs as view engine
app.set('view engine', 'ejs');

// Load routing
require('./route/index')(app)

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

var server = app.listen(3000, () => {
    console.log('Running on localhost:3000')
})