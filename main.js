const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const PORT= 3000
const routes = require("./routes/index")
const connectDB = require('./database/db')

app.set('view engine', 'pug')

app.use(bodyParser.json())

app.use(routes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`express running`)
    })
})

