const { Router } = require('express')
const router = Router()
const Qustion = require('../models/question')
const Task = require('../models/taskQuestion')
const Word = require('../models/word')

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
