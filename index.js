const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cors())
app.listen(8000, () => {
    console.log('Server started!')
})
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(cookieParser())
app.route('/rest/token').get((req, res) => {
    const token = uuidv4()
    return res.json({token})
})
