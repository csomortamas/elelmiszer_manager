/**
 * Saves a termek to the database
 */

module.exports = function(objectrepository) {
    return function(req, res, next) {
        console.log("saveTermekMW")
        next()
    }
}