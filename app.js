import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './api'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'

const app = express()
const genericErrorHandler = (err, req, res, next) => {
  if (req.querymen && req.querymen.error) {
    res.status(400).json({ error: req.querymen.error })
  } else if (req.bodymen && req.bodymen.error) {
    res.status(400).json({ error: req.bodymen.error })
  } else if (err.errors) {
    res.status(400).json({
      error: {
        valid: false,
        param: Object.keys(err.errors).join(','),
        message: err.message
      }
    })
  } else {
    res.status(400).json({ error: err.message ? err.message : `Undefined error: ${err}` })
  }
}
app.use(bodyParser.json())
app.use(api)
app.use(cors())
app.use(queryErrorHandler())
app.use(bodyErrorHandler())
app.use(genericErrorHandler)
app.listen(process.env.PORT || 3000, () => {
  console.log('Server started!')
})
