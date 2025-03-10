const express = require("express")
const app = express()
const morgan = require("morgan")

app.set("view engine",'ejs')

app.use(morgan('dev'))

app.get("/",(req,res)=>{
   
    res.render('index')

})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("Public"))

// app.get("/get_data",(req,res)=>{
//     console.log(req.query)
//     res.send("data received")
    
// })
app.post("/get_data",(req,res)=>{
    console.log(req.body)
    res.send("data received")
    
})


app.listen(3001)
