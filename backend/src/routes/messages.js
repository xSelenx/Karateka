const express = require('express')

const router = express.Router()

const Message = require('../models/message')

// GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }

  if (req.query.email) {
    query.email = req.query.email
  }

  res.send(await Message.find(query))
})
router.get('/init', async (req, res) => {
  //
  //    Let's delete any records that might be there first.
  //
  await Message.deleteMany({})

  const message1 = await Message.create({
    message: 'Hello',
    subject: 'Titel',
    sender: 'steve@coyotiv.com',
    recipient: ['selen.oruc@hotmail.com'],
  })

  console.log(message1)
  //
  //    Mongoose/mongo give us a save() function!
  //
  // await armagan.save()

  //
  //    Send a response back to the user.
  //
  res.sendStatus(200)
})

router.get('/id/:id', async (req, res) => {
  const { id } = req.params

  try {
    const user = await Message.find({ _id: id })
    res.send(user)
  } catch (e) {
    res.send(`Error: ${e.message}`)
  }
})
router.delete('/', async (req, res) => {
  console.log('Hello xy')

  await Message.deleteMany({})
  res.send()
})
router.delete('/:userId', async (req, res) => {
  const user = await Message.findById(req.params.userId)
  console.log(user)
  await Message.deleteOne()
  res.send()
})

module.exports = router
