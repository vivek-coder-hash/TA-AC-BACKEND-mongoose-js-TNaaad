var express = require("express")
var logger  = require("morgan")
var mongoose = require("mongoose")

//connect to database
mongoose.connect("mongodb://localhost/sample" , { useNewUrlParser: true , useUnifiedTopology:true } , (err)=> {
    console.log(err ? err : "connected db")
})

// instantiate the app
var app = express()

// middlewares
app.use(logger("dev"))

//routes

app.get("/" , (req,res)=> {
    res.send("Welcome")
})

app.get("/users" , (req,res)=> {
    res.send("Users Page")
})

// error handler middleware

app.use((req,res,err)=> {
    res.send("Page not found")
})

// listener
app.listen(3000 , ()=> {
    console.log("Server listening to port 3000")
})