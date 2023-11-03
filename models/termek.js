const Schema = require('mongoose').Schema;
const db = require('../config/db')

const Termek = db.model('Termek', {
    termek: String,
    lejarat: Date,
    tomeg: Number,
    kaloriatartalom: Number,
    _tarolo: {
        type: Schema.Types.ObjectId,
        ref: 'Tarolo'
    }
})

module.exports = Termek