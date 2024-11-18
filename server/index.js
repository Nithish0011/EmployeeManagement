const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("success")
            } else {
                res.json("the password is incorrect")
            } 
        } else {
            res.json("No record existed")
        }
        
    })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(Employee => res.json(Employee))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})