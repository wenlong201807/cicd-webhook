let http = require("http");
let {spawn} = require("child_process");
let crypto = require("crypto");
const sendMail = require("./sendMail");
const SECRET = "random code";

function sign(body) {
  const r = `sha1=` + crypto.createHash("sha1", SECRET).update(body).digest("hex");
  console.log('webhook-sign ->: ', r);
  return r;
}
let server = http.createServer((req, res) => {
  // console.log("触发钩子自动更新执行:", req.method, req.url);
  // console.log("触发钩子自动更新时req.headers:", req.headers);
  res.setHeader("Content-Type", "application/json;charset=utf-8");

  if (req.method === "POST" && req.url === "/webhook") {
    let buffers = [];
    req.on("data", (buffer) => {
      buffers.push(buffer);
    });

    req.on("end", (buffer) => {
      // console.log('---->req.on("end"<---')
      let body = Buffer.concat(buffers);
      let event = req.headers["x-github-event"]; // event=push 事件
      // github请求来的时候，要传递请求体，
      // 另外还会穿一个signature过来，需要验证签名对不对
      let signature = req.headers["x-hub-signature"];
      // 以上正常，问题在这之下--------------------------------------------
      if (signature !== sign(body)) {
        console.log('两处的密码不同???')
        // return res.end("not Allowed"); // TODO 这里有错误
      }

      // 添加部署脚本
      if(event == 'push') {
        // console.log('部署脚本自动执行')
        let payload = JSON.parse(body);
        // console.log('部署脚本自动执行payload: ', payload);
        // $ sh vue-cicd-front.sh
        // $ sh cicd-back.sh
        let child = spawn('sh', [`./${payload.repository.name}.sh`]);

        let buffers = [];
        child.stdout.on('data', (buffer) => {
          buffers.push(buffer)
        })
        child.stdout.on('end', (buffer) => {
          let log = Buffer.concat(buffers).toString();
          sendMail(`
            <h1>部署日期: ${new Date()}</h1>
            <h2>部署人: ${payload.pusher.name}</h2>
            <h2>部署邮箱: ${payload.pusher.email}</h2>
            <h2>提交信息: ${payload.head_commit && payload.head_commit['message']}</h2>
            <h2>部署日志: ${log.replace('\r\n', '<br />')}</h2>
          `)
          console.log('部署脚本执行结束-log:', log)
        })
      }

      res.end(JSON.stringify({ ok: true }));
    });
  } else {
    res.end("not found");
  }
});

server.listen(6000, () => {
  console.log(`webhook服务已经启动在6000端口了`);
});
