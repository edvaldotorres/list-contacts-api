const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const router = require('./routes')

let app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router(app)

const port = parseInt(process.env.PORT, 10) || 8000
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
console.log("Server is running the port " + port)