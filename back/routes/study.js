const { Router } = require('express')
const router = Router()
const TaskQustion = require('../models/taskQuestion')
const Word = require('../models/word')

router.get('/tasks', async (req, res) => {
  res.status(200).json('tasks')
})



module.exports = router
