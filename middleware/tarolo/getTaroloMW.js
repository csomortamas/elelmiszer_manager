/**
 * Load a given tarolo from the database
 */

module.exports = function(objectrepository) {
    return function(req, res, next) {
        console.log("getTaroloMW")
        next()
    }
}