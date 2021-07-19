//requires
var express = require("express")
var logger = require("morgan")
var mongoose = require("mongoose")

//connect to database

mongoose.connect("mongodb://localhost/sample" , { useNewUrlParser: true , useUnifiedTopology:true } , (err)=> {
    console.log(err ? err : "connected db")
})

// instantiate app
var app = express()

//route

app.get("/" , (req,res)=> {
    res.send("Welcome")
})

// listener

app.listen(5000, ()=> {
    console.log("server listening to port 5000")
})