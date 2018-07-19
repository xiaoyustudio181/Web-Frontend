var fs = require("fs");

var path='./fs_mkdir.js';
var path2='./fs_mkdir2.js';

exists(path);
exists(path2);

function exists(path) {
  if(fs.existsSync(path)){
    console.log('"'+path+'" 存在。');
  }else{
    console.log('"'+path+'" 不存在。');
  }
}
