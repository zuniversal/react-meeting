import React, { useState } from 'react';
import SmartForm from '@/common/SmartForm';
import { Modal } from 'antd';
import {
  numRule,
} from '@/configs';
import { useIntl } from 'umi';

const LoginForm = props => {
  // const { intl: { messages } } = useIntl();
  const { messages } = useIntl();
  console.log(' LoginForm intl ： ', messages,  )// 
  // const { messages } = intl;

  const checkboxData = [
    { label: messages.login.remember, value: 1 },
  ];

  const config = [
    {
      // formType: 'InputNumber',
      itemProps: {
        label: messages.login.emailAddr,
        name: 'mdn',
      },
      comProps: {
        className: 'formItem',
        // controls: false,
      },
    },
    {
      formType: 'Password',
      formRules: [numRule],
      itemProps: {
        label: messages.login.password,
        name: 'password',
      },
      comProps: {
        className: 'formItem',
        // controls: false,
      },
    },
    {
      noRule: true,
      formType: 'Checkbox',
      checkboxData: checkboxData,
      itemProps: {
        label: 'xxx',
        name: 'remember',
      },
      extra: <div className="link" onClick={() => goPage('forgetPwd')}>
        忘记密码
      </div>
    },
  ];

  return <SmartForm layout={'vertical'} config={config} {...props}></SmartForm>;
};

LoginForm.defaultProps = {
  init: {},
};

export default LoginForm;
