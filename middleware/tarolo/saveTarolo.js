/**
 * Saves a tarolo to the database
 */

module.exports = function(objectrepository) {
    return function(req, res, next) {
        console.log("saveTaroloMW")
        next()
    }
}