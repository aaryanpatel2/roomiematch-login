const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const RoomieModel = require('./models/Roomie')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/roomie")

app.post("/login", (req, res) => {
    const {email, password} = req.body
    RoomieModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Login successful")
            } else {
                res.json("Incorrect password")
            }
        } else {
            res.json("User not found")
        }
    })
})

app.post('/signup', (req, res) => {
    RoomieModel.create(req.body)
    .then(roomies => res.json(roomies))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is running on port 3001")
})