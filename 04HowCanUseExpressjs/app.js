const express = require('express')

const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.send("Hello World I'm  Subrata Das from about ")
})

app.listen(3000)