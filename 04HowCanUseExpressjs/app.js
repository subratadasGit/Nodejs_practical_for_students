const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World I'm  Subrata Das")
})
app.get('/about',(req,res)=>{
    res.send("Hello World I'm  Subrata Das from about ")
})

app.listen(3000)