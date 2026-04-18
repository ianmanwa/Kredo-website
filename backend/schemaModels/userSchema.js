// CONNECTS TO MONGODB

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    coins: {
        type: String,
        required: false,
    },

},
    { Timestamps: true })


module.exports = mongoose.model('User', userSchema)