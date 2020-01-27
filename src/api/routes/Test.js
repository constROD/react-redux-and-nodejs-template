const express = require('express')
const router = express.Router()

router.post('/rod', (req, res, next) => {
  res.status(200).send('Test Success!')
})

module.exports = router