const express = require('express')
const api = require('./routes/api')
const cors = require('cors')


const app = express()

app.use(cors({
    origin: ['http://localhost:3000',
        'http://localhost:3001',
        'https://11acre.in',
        'https://admin.11acre.in'],
}))

app.use(express.json())

app.use('/', api)


module.exports = app