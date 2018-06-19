var http = require('http');//使用require指令载入http模块
//console.log(http);

http.createServer(function (request, response) {//创建服务器
    response.writeHead(200, {'Content-Type': 'text/plain'});//发送HTTP头部 (HTTP状态值，内容类型)
    response.end('Hello World\n');//发送响应数据
}).listen(8888);
//此时可以用浏览器访问 localhost:8888 查看效果
console.log('Server is running at http://127.0.0.1:8888/');
