// middlewares
const renderMW = require('../middleware/renderMW')

// tarolo middlewares
const getTarolokMW = require('../middleware/tarolo/getTarolokMW')
const getTaroloMW = require('../middleware/tarolo/getTaroloMW')
const saveTaroloMW = require('../middleware/tarolo/saveTarolo')
const delTaroloMW = require('../middleware/tarolo/delTarolo')

// termek middlewares
const getTermekekMW = require('../middleware/termek/getTermekekMW')
const getTermekMW = require('../middleware/termek/getTermekMW')
const saveTermekMW = require('../middleware/termek/saveTermekMW')
const delTermekMW = require('../middleware/termek/delTermekMW')

module.exports = function(app) {
    const objRepo = {}
    
    app.get(
        '/',
        getTarolokMW(objRepo),
        renderMW(objRepo, 'index')
    )

    app.use(
        '/tarolo/new',
        saveTaroloMW(objRepo),
        renderMW(objRepo, 'tarolo_uj')
    )

    app.use(
        '/tarolo/edit/:taroloid',
        getTaroloMW(objRepo),
        saveTaroloMW(objRepo),
        renderMW(objRepo, 'tarolo_mosdositas')
    )

    app.get(
        'tarolo/del/:taroloid',
        getTaroloMW(objRepo),
        delTaroloMW(objRepo)
    )

    app.get(
        'termek/:taroloid',
        getTermekekMW(objRepo),
        renderMW(objRepo, 'tarolo')
    )

    app.use(
        'termek/new/:taroloid',
        saveTermekMW(objRepo),
        renderMW(objRepo, 'termek_uj')
    )

    app.use(
        'termek/:taroloid/edit/:termekid',
        getTaroloMW(objRepo),
        getTermekMW(objRepo),
        saveTermekMW(objRepo),
        renderMW(objRepo, 'termek_modositas')
    )

    app.get(
        'termek/:taoloid/del/:termekid/',
        getTaroloMW(objRepo),
        getTermekMW(objRepo),
        delTermekMW(objRepo)
    )
}