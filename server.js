const http = require("http");
var server=http.createServer((req,res)=>{
res.end("hello22");
});
server.listen(9000);
