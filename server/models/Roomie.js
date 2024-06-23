const mongoose = require('mongoose')

const RoomieSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    imageURL: String,
    age: String,
    gender: String,
    budget: String,
    pet: String,
    clean: String,
    social: String,
    alcnsmoke: String,
    sleep: String,
    interest: String,
    match: String



})

const RoomieModel = mongoose.model("roomies", RoomieSchema)

module.exports = RoomieModel