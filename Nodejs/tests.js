switch (14){//运行方式：在文件所在目录下打开命令窗口运行node tests.js
    case 1://创建 HTTP 服务器
        var http = require('http');//require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
        http.createServer(function (request, response) {
            // 发送 HTTP 头部
            // HTTP 状态值: 200 : OK
            // 内容类型: text/plain
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hello World\n');
        }).listen(8888);
        console.log('Server running at http://127.0.0.1:8888/');
        //此时可以访问本地服务器8888这个端口
        break;
    case 2://阻塞代码实例
        var fs = require("fs");
        var data = fs.readFileSync('text.txt');
        console.log(data.toString());
        console.log("程序执行结束!");
        break;
    case 3://非阻塞代码实例
        var fs = require("fs");
        fs.readFile('text.txt', function (err, data) {
            if (err) return console.error(err);
            console.log(data.toString());
        });
        console.log("程序执行结束!");
        break;
    case 4://事件处理
        var events = require('events');// 引入 events 模块
        var eventEmitter = new events.EventEmitter();// 创建 eventEmitter 对象
        var connectHandler = function connected() {// 创建事件处理程序
            console.log('连接成功。');
            eventEmitter.emit('data_received');// 触发 data_received 事件
        };
        eventEmitter.on('connection', connectHandler);// 绑定 connection 事件处理程序
        eventEmitter.on('data_received', function(){// 使用匿名函数绑定 data_received 事件
            console.log('数据接收成功。');
        });
        eventEmitter.emit('connection');// 触发 connection 事件
        console.log("程序执行完毕。");
        break;
    case 5://异步函数用于读取文件。如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。
        //如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。
        var fs = require("fs");
        fs.readFile('text.txt', function (err, data) {
            if (err){
                console.log(err.stack);
                return;
            }
            console.log(data.toString());
        });
        console.log("程序执行完毕。");
        break;
    case 6://当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。
        var EventEmitter = require('events').EventEmitter;
        var event = new EventEmitter();
        event.on('some_event', function() {
            console.log('some_event 事件触发');
        });
        setTimeout(function() {
            event.emit('some_event');
        }, 1000);
        break;
    case 7://EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持若干个事件监听器。当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
        var events = require('events');
        var emitter = new events.EventEmitter();
        emitter.on('someEvent', function(arg1, arg2) {
            console.log('listener1', arg1, arg2);
        });
        emitter.on('someEvent', function(arg1, arg2) {
            console.log('listener2', arg1, arg2);
        });
        emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
        break;
    case 8://事件方法
        var events = require('events');
        var eventEmitter = new events.EventEmitter();
        var listener1 = function listener1() {// 监听器 #1
            console.log('监听器 listener1 执行。');
        };
        var listener2 = function listener2() {// 监听器 #2
            console.log('监听器 listener2 执行。');
        };
        eventEmitter.addListener('connection', listener1);// 绑定 connection 事件(到监听器数组的尾部)，处理函数为 listener1
        eventEmitter.on('connection', listener2);// 绑定 connection 事件，处理函数为 listener2
        var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
        console.log(eventListeners + " 个监听器监听连接事件。");
        eventEmitter.emit('connection');// 处理 connection 事件
        eventEmitter.removeListener('connection', listener1);// 移除监绑定的 listener1 函数
        console.log("listener1 不再受监听。");
        eventEmitter.emit('connection');// 触发连接事件
        eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
        console.log(eventListeners + " 个监听器监听连接事件。");
        console.log("程序执行完毕。");
        break;
    case 9://EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。当 error 被触发时，EventEmitter 规定如果没有响应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。
        var events = require('events');
        var emitter = new events.EventEmitter();
        emitter.emit('error');
        //大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。原因有两点：首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。
        break;
    case 10:
        var Hello = require('./hello');//引入了当前目录下的 hello.js 文件（node.js 默认后缀为 js）
        //Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
        hello = new Hello();
        hello.setName('BYVoid');
        hello.sayHello();
        break;
    case 11://路由
        var server = require("./server");
        var router = require("./router");
        server.start(router.route);
        break;
    case 12://全局变量
        console.log(__filename);
        console.log(__dirname);
        break;
    case 13:
        process.on('exit', function(code) {
            setTimeout(function() {
                console.log("永远不会执行。");
            }, 0);
            console.log('退出码为：', code);
        });
        process.stdout.write("输出到终端：Hello World!" + "\n");
        process.argv.forEach(function(val, index, array) {
            console.log('通过参数读取 '+index + ': ' + val);
        });
        console.log('执行路径：'+process.execPath);
        console.log('平台信息：'+process.platform);
        console.log('当前目录: ' + process.cwd());
        console.log('当前版本: ' + process.version);
        console.log('内存使用情况: ');
        console.log(process.memoryUsage());
        console.log("程序执行结束。");
        break;
    case 14:
        var http = require('http');
        var querystring = require('querystring');

        var postHTML =
            '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
            '<body>' +
            '<form method="post">' +
            '网站名： <input name="name"><br>' +
            '网站 URL： <input name="url"><br>' +
            '<input type="submit">' +
            '</form>' +
            '</body></html>';

        http.createServer(function (request, response) {
            var body = "";
            request.on('data', function (chunk) {
                body += chunk;
            });
            request.on('end', function () {
                body = querystring.parse(body);// 解析参数
                response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
                if(body.name && body.url) { // 输出提交的数据
                    response.write("网站名：" + body.name);
                    response.write("<br>");
                    response.write("网站 URL：" + body.url);
                } else {  // 输出表单
                    response.write(postHTML);
                }
                response.end();
            });
        }).listen(3000);
        break;
}