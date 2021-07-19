var express = require("express")
var mongoose = require("mongoose")
var logger = require("morgan")

//connect to database
mongoose.connect("mongodb://localhost/sample" , { useNewUrlParser: true , useUnifiedTopology:true } , (err)=> {
    console.log(err ? err : "connected db")
})

//instantiate the app

var app = express()


//route

app.get("/" , (req,res)=> {
    res.send("Welcome")
})

//Error handle middleware

app.use((err,req,res)=> {
    res.send("page not found")
})

//listener

app.listen(5000 , ()=> {
    console.log("server listening to port 5000")
})