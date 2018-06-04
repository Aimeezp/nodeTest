//阻塞代码实例

var fs = require("fs");

var data = fs.readFileSync('input.txt'); //请求input里面的数据

console.log(data.toString());
console.log("程序执行结束!");