let http = require("http"); //引入http 模块
//创建自己的第一个服务器
//creatServer 创建服务器的函数 参数是回调函数
//回调函数的参数 req request 请求  res response 响应
let server = http.createServer((req, res) => {
  res.end("hello world"); //给前端的响应，里面传的值需要是json/字符串，一般都是json
});
//开启端口号 listen 表示监听的端口号 listen 参数 端口号 回调函数(可选参数)
server.listen(3000, function() {
  console.log("3000启动成功");
});
//访问 localhost:3000  127.0.0.1:3000 
