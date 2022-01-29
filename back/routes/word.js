const { Router } = require('express')
const router = Router()
const Word = require('../models/word')

router.get('/', async (req, res) => {
  try {
    const findWordsFold = await (await Word.find({})).map((data) => data.fold)

    const folds = [...new Set(findWordsFold)]

    res.status(200).json(folds)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
})
router.get('/number=:num', async (req, res) => {
  try {
    const { num } = req.params

    if (!num) {
      return res.status(400).json({ error: 'invalid data' })
    }

    const findWords = await Word.aggregate([
      { $match: { fold: +num, know: false } },
      { $sample: { size: 1 } },
    ])

    res.status(200).json(findWords)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
})

module.exports = router
