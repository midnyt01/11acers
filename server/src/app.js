const express = require('express')
const api = require('./routes/api')
const cors = require('cors')


const app = express()

app.use(cors({
    origin: ['http://localhost:3000',
        'http://localhost:3001',
        'https://11acers.nitrosk.com',
        'https://11acersadmin.nitrosk.com'],
}))

app.use(express.json())

app.use('/', api)


module.exports = app