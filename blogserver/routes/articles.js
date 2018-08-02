const express = require('express')
const router = express.Router()
const ControllerArticles = require('../controllers/articles')

router.get('/', ControllerArticles.get)
router.post('/', ControllerArticles.add)
router.delete('/', ControllerArticles.remove)
router.put('/', ControllerArticles.edit)

module.exports = router