const http = require('http') // for creating http server 
const server = http.createServer((req,res)=>{
    res.end("Hello ladies and gentlemen I am one and  only");
})
server.listen(3000)