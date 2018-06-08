let http = require("http");
let fs = require("fs");


let server = http.createServer((request,response) =>{
    console.log("." + request.url);

    fs.readFile("." + request.url ,(err,data) =>{
        if(err){
            console.log("." + request.url + "获取页面失败");
            response.statusCode = 404;
            response.write("404");
            response.end();
        }else{
            response.write(data);
            response.end();
        }
    });
});

server.listen(8080);


