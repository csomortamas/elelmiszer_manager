/**
 * Render values into the template
 */

module.exports = function(objectrepository, viewName) {
    return function(req, res, next) {
        console.log('rendering')
        next()
    }
}