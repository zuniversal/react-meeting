const http = require('http');
const crypto = require('crypto');
const { spawn } = require('child_process');
const SECRET = '';
const sendMail = require('./sendMail');
const dingHook = require('./dingHook');
const { nowYearMonthDay } = require('./utils');

// github设置那服务端密钥 Secret 不填就是不需要验证
const sign = body => {
  return (
    `sha1` +
    crypto
      .createHmac('sha1', SECRET)
      .update(body)
      .digest('hex')
  );
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/test') {
    console.log(' 监听 test ===== ： '); //
    res.end('happy'); // 注意 不能发送对象
    return;
  }
  if (req.method === 'POST' && req.url === '/webhook') {
    console.log(' 推送请求： ');
    const buffers = [];
    req.on('data', buffer => {
      console.log(' 监听 datadata ===== ： '); //
      buffers.push(buffer);
    });
    req.on('end', buffer => {
      console.log(' 监听 endend ===== ： '); //
      let body = Buffer.concat(buffers);
      const event = req.headers['x-github-event'];
      const signature = req.headers['x-hub-signature'];
      console.log(
        'event, signature ： ',
        event,
        signature,
        sign(body),
        req.headers,
      ); //
      // console.log('req.headers ： ', req.headers,)//

      if (signature !== sign(body)) {
        console.log(' 不允许 ： ');
        // return res.end('不允许')
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ok: true }));
      if (event === 'push') {
        const payload = JSON.parse(body);
        console.log(' payload ： ', payload);
        const tasks = [`../deploy.sh`];

        tasks.forEach((v, i) => {
          console.log(' tasks v ： ', v, i);
          const child = spawn('sh', [v]);
          const buffers = [];
          child.stdout.on('data', buffer => {
            console.log(' 监听 data ===== ： ');
            buffers.push(buffer);
          });

          child.stdout.on('end', buffer => {
            console.log(' 监听 end ===== ： ');
            let logs = Buffer.concat(buffers).toString();
            console.log(' logslogs ： ', logs);
            const message = `
              <h1>部署日期： ${nowYearMonthDay}</h1>
              <h2>部署项目： ${payload.repository.name}</h2>
              <h2>部署人： ${payload.pusher.name}</h2>
              <h2>部署邮箱： ${payload.pusher.email}</h2>
              <h2>提交信息： ${payload.head_commit &&
                payload.head_commit['message']}</h2>
              <h2>部署日志： ${logs.replace('\r\n', '<br/>')}</h2>
            `;
            sendMail(message, payload);

            const dingMessage = `
              部署日期： ${nowYearMonthDay}
              部署项目： ${payload.repository.name}
              部署人： ${payload.pusher.name}
              部署邮箱： ${payload.pusher.email}
              提交信息： ${payload.head_commit &&
                payload.head_commit['message']}
              部署日志： ${logs.replace('\r\n', '<br/>')}
            `;
            dingHook({
              ...payload,
              content: dingMessage,
            });
          });
        });
      }
    });
  } else {
    res.end('404');
  }
});

const PORT = 9099;
server.listen(PORT, () => {
  // server.listen(PORT, '0.0.0.0', () => {
  console.log(` webhook 服务器运行中 ${PORT} ：`);
});
