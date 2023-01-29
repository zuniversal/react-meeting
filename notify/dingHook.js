// 自定义node通知
const request = require('request');
const crypto = require('crypto');

const SECRET =
  'SECec99c903300de435e85f9736c1f96321a7e63cc42df0c258b992597f62f5c968';
let url =
  'https://oapi.dingtalk.com/robot/send?access_token=9e69ea4133161b0a35727597ea947dc568180ccf736153f29be2fce8fbf2f297';

const time = Date.now();
const stringToSign = time + '\n' + SECRET;
const base = crypto
  .createHmac('sha256', SECRET)
  .update(stringToSign)
  .digest('base64');
const sign = encodeURIComponent(base);
url = url + `&timestamp=${time}&sign=${sign}`;
console.log(' url ： ', url); //

module.exports = payload => {
  const data = {
    msgtype: 'text',
    text: {
      content: payload.content,
    },
    at: {
      atMobiles: [15160208606],
      isAtAll: true,
    },
  };

  request.post(
    url,
    {
      json: data,
      encoding: 'utf-8',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    function(error, res, body) {
      console.log(' error ： ', error); //
      if (!error && res.statusCode == 200) {
        console.log(' body ： ', body); //
      }
    },
  );
};
