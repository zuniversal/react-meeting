import React from 'react';
import './style.less';
import { Form, Checkbox } from 'antd';
import { useIntl } from 'umi';
import SmartForm from '@/common/SmartForm';

const LoginForm = props => {
  const { messages } = useIntl();

  const config = [
    {
      itemProps: {
        label: messages.login.emailAddr,
        name: 'email',
      },
      comProps: {
        className: 'formItem',
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
      },
    },
    <Form.Item
      name="remember"
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

export default LoginForm;
