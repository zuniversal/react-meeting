import React, { useEffect, useState } from 'react';
import './style.less';
import { history, useIntl } from 'umi';
import * as payApi from '@/services/pay';
import * as configs from '@/configs';

const Pay = ({ msg }) => {
  const [payResult, setPayResult] = useState({
    result: 0,
  });

  const getPayResult = async params => {
    console.log(' getPayResult , ： ', params);
    const { query } = history.location;
    console.log(' query ： ', query, msg.payResultCodeMap);
    const res = await payApi.getPayResult({
      outTradeNo: '1796420396521246521',
      outTradeNo: query.outTradeNo,
    });
    console.log('  res await 结果  ：', res);
    setPayResult({
      ...res.data,
      result: configs.payResultCodeMap[res.data.code],
    });
  };

  useEffect(() => {
    getPayResult();
  }, []);

  return (
    <div className="result">
      <div className="result">{msg.payResultCodeMap[payResult.code]}</div>
      <div className="result">{msg.payResultEnCodeMap[payResult.code]}</div>
    </div>
  );
};

const PayResult = props => {
  const { messages } = useIntl();
  return (
    <div className="payResult">
      <div className="conWrapper">
        <div className="title">{messages.pay.payResult}</div>
        <Pay msg={messages.pay}></Pay>
      </div>
    </div>
  );
};

export default PayResult;
