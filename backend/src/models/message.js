const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  message: {
    type: String,

    required: true,
  },

  subject: {
    type: String,

    required: true,
  },

  recipient: {
    type: String,

    required: true,
  },

  sender: {
    type: String,

    required: true,
  },
})

module.exports = mongoose.model('Message', messageSchema)
