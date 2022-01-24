const { Router } = require('express')
const router = Router()
const Qustion = require('../models/question')
const TaskQustion = require('../models/taskQuestion')
const Word = require('../models/word')

router.get('/question', async (req, res) => {
  const da = await Qustion.aggregate([{ $sample: { size: 1 } }])
  console.log(da)
  res.status(200).json(da)
})

router.get('/tasks', async (req, res) => {
  res.status(200).json('tasks')
})

router.get('/words', async (req, res) => {
  const da = await Word.find({})
  res.status(200).json(da)
})

module.exports = router
