var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        //url.parse(string).pathname //url从根目录到问号前面的部分
        //url.parse(string).query //url问号后面的部分
        //querystring.parse(queryString)["foo"] //url问号后面foo的值
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;