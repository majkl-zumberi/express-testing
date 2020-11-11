const express = require('express')
const router = new express.Router()
router.get('/document', (req, res) => {
  return res.json([])
})
module.exports = router
