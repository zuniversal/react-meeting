import React from 'react';
import './style.less';
import { Form, Button } from 'antd';
import { useIntl, useModel, history } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import { setItem, getItem } from '@/utils';

const ForgetPwd = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' ForgetPwd   msg,   ： ', intl, messages);
  const { loginAsync } = useModel('users');
  const onConfirm = params => {
    console.log('onConfirm 提交 : ', params, props);
    // loginAsync(params);
  };

  const content = (
    <div className="forgetPwdTip">{messages.login.forgetPwdTip}</div>
  );

  return (
    <LrWrapper title={messages.login.forgetPwd} content={content}>
      <Button type="primary" className="actionBtn" onClick={onConfirm}>
        {messages.confirm}
      </Button>
    </LrWrapper>
  );
};

export default ForgetPwd;
