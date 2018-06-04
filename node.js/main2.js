//非阻塞代码实例
var fs = require("fs");

fs.readFile('input2.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");

//fs.readFile() 是异步函数用于读取文件