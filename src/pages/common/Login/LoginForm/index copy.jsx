import React, { useState } from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';
import { Form, Checkbox } from 'antd';
import { numRule } from '@/configs';
import { useIntl } from 'umi';

const LoginForm = props => {
  // const { intl: { messages } } = useIntl();
  const { messages } = useIntl();
  console.log(' LoginForm intl ： ', messages); //
  // const { messages } = intl;

  const checkboxData = [{ label: messages.login.remember, value: 1 }];

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
      itemProps: {
        label: messages.login.password,
        name: 'password',
      },
      comProps: {
        className: 'formItem',
        // controls: false,
      },
    },
    // {
    //   noRule: true,
    //   formType: 'Checkbox',
    //   checkboxData: checkboxData,
    //   itemProps: {
    //     label: 'xxx',
    //     name: 'remember',
    //   },
    //   comProps: {
    //     className: 'rememberItem',
    //   },
    //   extra: <div className="link" onClick={() => goPage('forgetPwd')}>
    //     忘记密码
    //   </div>
    // },
    <Form.Item
      name="remember"
      key="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
      className={'formItems rememberItem'}
    >
      <Checkbox>{messages.login.remember}</Checkbox>
      <span className="findPwd" onClick={() => goPage('forgetPwd')}>
        {messages.login.findPwd}
      </span>
    </Form.Item>,
  ];

  return (
    <SmartForm
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

LoginForm.defaultProps = {
  init: {},
};

export default LoginForm;
