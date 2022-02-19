let http = require("http");
let crypto = require("crypto");
const SECRET = "zwl@157351";

function sign(body) {
  return `sha1=` + crypto.createHash("sha1", SECRET).update(body).digest("hex");
}
let server = http.createServer((req, res) => {
  console.log("触发钩子自动更新执行:", req.method, req.url);
  if (req.method === "POST" && req.url === "/webhook") {
    let buffers = [];
    req.on("data", (buffer) => {
      buffers.push(buffer);
    });

    req.on("end", (buffer) => {
      let body = Buffer.concat(buffers);
      let event = req.headers["x-github-event"]; // event=push 事件
      // github请求来的时候，要传递请求体，
      // 另外还会穿一个signature过来，需要验证签名对不对
      let signature = req.headers["x-hub-signature"];
      if (signature !== sign(body)) {
        return res.end("not Allowed");
      }
    });
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
