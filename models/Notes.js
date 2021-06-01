const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  Note: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Notes', NoteSchema)
