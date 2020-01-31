const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const https = require('https')
const fs = require('fs')

const app = express()
const CONFIG = require('../config/App')

/* Middleware */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../../dist')))

/* Route for Client */
app.get('*', (req, res, next) => {
  res.setHeader('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

/* Routes */
const testRoute = require('./routes/Test')

app.use('/test', testRoute)

if (CONFIG.APP_ZONE === 'production') {
  const server = {
    key: fs.readFileSync('SSL KEY PATH'),
    cert: fs.readFileSync('SSL CERT PATH'),
    ca: fs.readFileSync('SSL CA PATH')
  }

  https.createServer(server, app).listen(CONFIG.APP_PORT, () => {
    console.log(`_________________________________`)
    console.log(`*********************************`)
    console.log(`------------ RUNNING ------------`)
    console.log(`[APP]  : ${CONFIG.APP_NAME}`)
    console.log(`[PORT] : ${CONFIG.APP_PORT}`)
    console.log(`[ZONE] : ${CONFIG.APP_ZONE}`)
    console.log(`_________________________________`)
    console.log(`*********************************`)
  })
} else {
  app.listen(CONFIG.APP_PORT, () => {
    console.log(`_________________________________`)
    console.log(`*********************************`)
    console.log(`------------ RUNNING ------------`)
    console.log(`[APP]  : ${CONFIG.APP_NAME}`)
    console.log(`[PORT] : ${CONFIG.APP_PORT}`)
    console.log(`[ZONE] : ${CONFIG.APP_ZONE}`)
    console.log(`_________________________________`)
    console.log(`*********************************`)
  })
}

