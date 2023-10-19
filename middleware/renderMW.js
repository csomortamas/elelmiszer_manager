/**
 * Render values into the template
 */

module.exports = function(objectrepository, viewName) {
    return function(req, res) {
        res.render(viewName);
    };
}