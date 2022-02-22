const { Router } = require('express')
const router = Router()

router.get('/tasks', async (req, res) => {
  res.status(200).json('tasks')
})

module.exports = router
