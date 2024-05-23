const http = require("http");
var server=http.createServer((req,res)=>{
res.end("Hello");
});
server.listen(9000);
