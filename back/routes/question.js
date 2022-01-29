const { Router } = require('express')
const router = Router()
const Qustion = require('../models/question')

router.get('/theme', async (req, res) => {
  try {
    const findJavaScriptQuestion = await Qustion.findOne({
      theme: 'JavaScript',
    })
    const findReactQuestion = await Qustion.findOne({ theme: 'React' })
    const findHTMLQuestion = await Qustion.findOne({ theme: 'HTML' })
    const findCssScssQuestion = await Qustion.findOne({ theme: 'CSS' })
    const questions = [
      findJavaScriptQuestion,
      findReactQuestion,
      findHTMLQuestion,
      findCssScssQuestion,
    ]

    res.status(200).json(questions)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
})

router.get('/theme/:topic', async (req, res) => {
  try {
    const { topic } = req.params

    if (!topic) {
      return res.status(400).json({ error: 'invalid data' })
    }

    const findQiustion = await Qustion.aggregate([
      { $match: { theme: topic } },
      { $sample: { size: 1 } },
    ])

    res.status(200).json(findQiustion)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
})

module.exports = router
