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

app.post("/users" , (req,res,next)=>{
    User.create(req.body , (err,user)=> {
       // console.log(err,user)
       next(err)
       res.json(user)
    })
})   //create file


app.get("/users" , (req,res,next)=> {
    User.find({}, (err,users)=> {
        next(err)
        res.json({users:users})  // User.find give array , therefore, we put object symbol inside res.json
    })
}) // Read or find file

/*Q. query a single document(user) using mongoose

on GET request on '/users/:id' route, fetch a user
use Model.find({_id: 'some-id'}) // use _id of inserted document in database
use Model.findOne({_id: 'some-id'})
use Model.findById(id) */

app.get("/users/:id" , (req,res,next)=> {
    var id = req.params.id
    /*User.findById(id , (err,user)=> {
        next(err)
        res.json(user)
    })*/

    /*User.find({_id:"60f6775ac07f980e086e7b00"},(err,user)=> {
        next(err)
        res.json(user)
    })*/

    User.findOne({_id:"60f6775ac07f980e086e7b00"},(err,user)=> {
        next(err)
        res.json(user)
    })
})


/*Update a user

on PUT request on '/users/:id', update a user
use Model.update
use Model.updateOne
use Model.findByIdAndUpdate(id) */


app.put("/users/:id" , (req,res,next)=> {
    var id = req.params.id
    User.findByIdAndUpdate(id,req.body, {new:true} , (err, updateduser)=> {
        next(err)
        res.json(updateduser)
    })
})


/*Q. delete a user using Model.findByIdAndDelete()

on DELETE request on '/users/:id' */


app.delete("/users/:id" , (req,res)=> {
    Product.findByIdAndDelete(req.params.id , (err , deleteduser)=> {
        res.send(`${deleteduser.name} was deleted`)
    })
})



// error handle middleware
app.use((err,req,res,next)=> {
    
    res.status(500).send(err)
 })


//listener

app.listen(4000,()=> {
    console.log("server listening to port 4k")
})