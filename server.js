const http = require("http");
var server=http.createServer((req,res)=>{
    //hi
res.end("bye");
});
server.listen(9000);
