const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.delete('/:id', siteController.delete)

router.get('/edit/:id', siteController.edit)
router.put('/:id', siteController.update)

router.get('/create', siteController.create)
router.post('/store', siteController.store)

// router.get('/:slug', siteController.show)
router.get('/', siteController.index)

module.exports = router
