//引入HTTP协议模块
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

//1、使用http.createdServer方法创建服务器；
//2、使用listen绑定端口；
//3、通过 request, response 参数来接收和响应数据。
//4、 response.writeHead向请求的客户端发送响应头,该函数一个请求内最多只能调用一次，如果不调用，则会自动生成一个响应头。