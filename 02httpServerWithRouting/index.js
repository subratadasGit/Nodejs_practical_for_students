const http = require('http') // multiple Routing  
const server = http.createServer((req,res)=>{


    if(req.url === '/about'){
        res.end("Hi from /about");
    }
    else if(req.url==='/'){
        res.end("Hello From Root Directory")
    }
    else {
        res.end("any route")
    }
})
server.listen(3000)