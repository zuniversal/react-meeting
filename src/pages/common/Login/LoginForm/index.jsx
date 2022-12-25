import React from 'react';
import './style.less';
import { Form, Checkbox } from 'antd';
import { history } from 'umi';
import SmartForm from '@/common/SmartForm';

const LoginForm = props => {
  const { messages } = props;

  const goPage = path => {
    history.push(path);
  };

  const checkboxData = [{ label: '', value: 1 }];

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
    {
      noRule: true,
      formType: 'Checkbox',
      checkboxData: checkboxData,
      itemProps: {
        label: '',
        name: 'isReviewer',
        className: 'approverCheckbox',
      },
      comProps: {
        className: 'rememberItem',
      },
      extra: messages.admin.approverTips,
    },
    <Form.Item
      key="remember"
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
      className={'formItems rememberItem'}
    >
      <Form.Item
        name="remember"
        valuePropName="checked"
        className={'formItems rememberItem'}
      >
        <Checkbox>{messages.login.remember}</Checkbox>
      </Form.Item>
      <Form.Item>
        <span className="findPwd" onClick={() => goPage('forgetPwd')}>
          {messages.login.findPwd}
        </span>
      </Form.Item>
    </Form.Item>,
  ];

  return (
    <SmartForm
      className="loginForm"
      layout={'vertical'}
      noLabelLayout
      config={config}
      // init={{
      //   isReviewer: 0,
      // }}
      {...props}
    ></SmartForm>
  );
};

export default LoginForm;
