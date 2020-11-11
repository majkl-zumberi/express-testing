import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import api from './api'

const app = express()
app.use(api)
app.use(cors())
app.listen(process.env.PORT || 3000, () => {
  console.log('Server started!')
})
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(cookieParser())
