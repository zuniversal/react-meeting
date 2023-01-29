const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // service: 'qq',
  service: 'smtp.163.com',
  host: 'smtp.163.com',
  port: 465,
  secureConnection: true,
  auth: {
    user: '15160208606@163.com',
    pass: 'ZWWZDYEGLSQAMPTQ', // smtp 授权码
  },
});

const sendMail = (message, payload) => {
  console.log(' sendMail   message,   ： ', message);
  const mailOptions = {
    from: '"15160208606" <15160208606@163.com>', // 发送地址
    // to: '15160208606@163.com',  // 接收者
    to: '604688489@qq.com', // 接收者
    // subject: '部署通知',
    subject: `项目：${payload.repository.name}-部署通知`,
    html: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('  对吗  error ', error);
    if (error) {
      return;
    }
    console.log(' 结果 message: ', info);
  });
};

module.exports = sendMail;
