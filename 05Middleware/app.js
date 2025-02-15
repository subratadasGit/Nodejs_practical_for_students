const express = require('express')
const morgan =require('morgan')
const app = express();




app.set('view engine','ejs')
app.use(morgan('dev'))

// app.use((req,res,next)=>{
//     console.log("This is middleware"); //custom middleware
//     let a = 10 ;
//     let b = 20 ;
//     console.log(a+b);
    
//     return next()
// })

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.send("Hello World I'm  Subrata Das from about ")
})

app.listen(3000)