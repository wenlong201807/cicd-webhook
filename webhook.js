let http = require("http");
let server = http.createServer((req, res) => {
  console.log('触发钩子自动更新执行:', req.method, req.url);
  if (req.method === "POST" && req.url === "/webhook") {
    // res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.end(JSON.stringify({ ok: true }));
  } else {
    res.end("not found");
  }
});

server.listen(6000, () => {
  console.log(`webhook服务已经启动在6000端口了`);
});
