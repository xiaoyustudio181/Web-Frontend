var fs = require("fs");

//阻塞代码
/*
var data = fs.readFileSync('txt1.txt');
console.log(data.toString());
console.log("程序执行结束!");
*/

//非阻塞代码（回调函数）
fs.readFile('txt1.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");
