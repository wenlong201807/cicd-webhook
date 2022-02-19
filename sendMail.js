
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  // host: '',
  service: 'qq',
  port: 465,
  secureConnection: true, // 使用了ssl
  auth: {
    user: '1573511441@qq.com',
    // 这里的密码不是qq密码，是你设置的smtp授权码
    pass: '666777',
  }
})


function sendMail(message) {
  let mailOptions = {
    from: '"1573511441" <1573511441@qq.com>', // 发送地址
    to: "1573511441@qq.com", // 接受者
    subject: "部署通知", // 主题
    html: message, // 内容主体
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("邮件发送失败", error);
    }
    console.log("邮件发送 %s", info.messageId);
  });
}
module.exports = sendMail;
