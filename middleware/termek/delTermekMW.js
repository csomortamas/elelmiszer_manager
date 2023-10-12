/**
 * Deletes a termek from the database
 */

module.exports = function(objectrepository) {
    return function(req, res, next) {
        console.log("delTermekMW")
        next()
    }
}