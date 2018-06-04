const http = require("http");

let ser = http.createServer((request,response) =>{
    response.write("Hello");
    response.end();
});

ser.listen(8080);

