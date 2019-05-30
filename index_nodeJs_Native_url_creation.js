var http = require('http');
var url = require('url');

var server = http.createServer("/", function(req, res){
    var mypath = url.parse(req.url).pathname;

    

    if(mypath == '/url1'){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>Premiere URL</h1>");
    }else if(mypath == "/url2"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>Deuxieme URL</h1>");
    }else if(mypath == "/"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>Tip top, ca demarre !</h1>");
    }else{
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>cette page n'existe pas</h1>");
    }


    res.end();
})

server.listen(3000);