const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notes') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, notesController.getTodos)

router.post('/createNote', notesController.createNote)

router.put('/markComplete', notesController.markComplete)

router.put('/markIncomplete', notesController.markIncomplete)

router.delete('/deleteTodo', notesController.deleteTodo)

module.exports = router