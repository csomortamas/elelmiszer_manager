const Schema = require('mongoose').Schema
const db = require('../config/db')

const Tarolo = db.model('Tarolo', {
    nev: String,
    homerseklet: Number,
    meret: Number,
    termekek_szama: Number 
})

module.exports = Tarolo