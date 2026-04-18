const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const ConnectDb = require("./DbConnect/dbConnection")
const cors = require("cors")

const PORT = process.env.PORT || 3000
ConnectDb


app.use(cors())
app.use(express.json())
app.use("/games",require("./routes/routes"))

app.listen(PORT,(err) =>{
    console.log(`App is listening to port: ${PORT}`)
})