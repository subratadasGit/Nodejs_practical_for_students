const http = require('http') // How you can Restart Server automatically
const server = http.createServer((req,res)=>{


    if(req.url === '/about'){
        res.end("Hi from /about");
    }
    else if(req.url==='/'){
        res.end("Hello From Root Directory I am subrata Das")
    }
    else {
        res.end("any route")
    }
})
server.listen(3000)