var express = require("express")
var logger  = require("morgan")


//connect to database


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