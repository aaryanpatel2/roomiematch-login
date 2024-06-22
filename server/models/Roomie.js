const mongoose = require('mongoose')

const RoomieSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,


})

const RoomieModel = mongoose.model("roomies", RoomieSchema)

module.exports = RoomieModel