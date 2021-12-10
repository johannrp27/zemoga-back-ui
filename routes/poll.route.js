const express = require('express')
const router = express.Router()

const PollService = require('../services/poll.services')
const pollService = new PollService()


router.get('/get', async (req, res) => {
  const contestants = await pollService.getContestants()
  res.json(contestants)
})

router.patch('/vote/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  console.log('Recieved', id, body.vote)
  try {
    const prod = await pollService.vote(id, body.vote)
    res.json(prod)
  } catch(e) {
    res.json(e)
  }
})


module.exports = router
