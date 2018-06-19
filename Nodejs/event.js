var events = require('events');// 引入 events 模块
var eventEmitter = new events.EventEmitter();// 创建 eventEmitter 对象

eventEmitter.on('data_received', function(){// 绑定 data_received 事件
    console.log('数据接收成功。');
});
eventEmitter.on('connection', function connected() {// 绑定 connection 事件
    console.log('连接成功。');
    eventEmitter.emit('data_received');// 触发 data_received 事件
});
eventEmitter.emit('connection');// 触发 connection 事件
console.log("程序执行完毕。");


/*
var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function listener1() {// 监听器 #1
    console.log('监听器 listener1 执行。');
};
var listener2 = function listener2() {// 监听器 #2
    console.log('监听器 listener2 执行。');
};
/!*addListener(event, listener)
为指定事件添加一个监听器到监听器数组的尾部。*!/
eventEmitter.addListener('connection', listener1);// 绑定 connection 事件，处理函数为 listener1
eventEmitter.on('connection', listener2);// 绑定 connection 事件，处理函数为 listener2
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

eventEmitter.emit('connection');// 处理 connection 事件

eventEmitter.removeListener('connection', listener1);// 移除监绑定的 listener1 函数
console.log("listener1 不再受监听。");
eventEmitter.emit('connection');// 触发连接事件
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");
console.log("程序执行完毕。");*/


/*var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');*/
/*EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。*/