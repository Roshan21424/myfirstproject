const http = require("http");
var server=http.createServer((req,res)=>{
res.end("hello2");
});
server.listen(9000);
