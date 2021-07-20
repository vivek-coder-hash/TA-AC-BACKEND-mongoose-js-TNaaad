//required
var express = require("express")
var logger = require("morgan")
var mongoose = require("mongoose")
var User  = require("./models/user")

//cpnnect to database
mongoose.connect("mongodb://localhost/sample" , {useNewUrlParser:true , useUnifiedTopology:true} , (err)=> {
    console.log(err?err:"connected to db")
})


//instantiate app
var app = express()


// capture json data
app.use(express.json())


//route

app.get("/" , (req,res)=> {
    res.send("Welcome")
})

app.post("/users" , (req,res)=>{
    User.create(req.body , (err,user)=> {
        next(err)
        res.json(user)
    })
})


// error handle middleware

app.use((err,req,res,next)=> {
    res.send(err)
})

//listener

app.listen(4000,()=> {
    console.log("server listening to port 4k")
})