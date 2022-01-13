const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

app.use('/study', require('./routes/study'))

app.listen(5000, () => {
  console.log('Start on port 5000.....')
})
