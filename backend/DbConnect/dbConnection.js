const mongoose = require("mongoose")

const connectDb = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log("The database is connected.....")
        })
}

module.exports = connectDb()