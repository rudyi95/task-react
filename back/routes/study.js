const { Router } = require('express')
const router = Router()

router.get('/question', async (req, res) => {
  res.status(200).json('question')
})

router.get('/tasks', async (req, res) => {
  res.status(200).json('tasks')
})

router.get('/words', async (req, res) => {
  res.status(200).json('words')
})

module.exports = router
