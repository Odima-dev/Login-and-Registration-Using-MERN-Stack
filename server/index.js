const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:127.0.0.1:27017/employee");

app.listen(3001, )