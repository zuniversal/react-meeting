import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import LoginForm from './LoginForm';
import { setItem, getItem } from '@/utils';

const Login = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' Login   msg,   ： ', intl, messages);
  const { loginAsync } = useModel('users');
  console.log(' loginAsync ： ', loginAsync);

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    try {
      const { remember, ...params } = formProps.values;
      console.log(
        '  对吗  remember ',
        remember,
        remember ? params : undefined,
        getItem('remember'),
        getItem('loginInfo'),
      );
      setItem('loginInfo', remember ? params : undefined);
      setItem('remember', !!remember);
      loginAsync(params);
    } catch (error) {
      console.log(' onSubmit error ： ', error);
    }
  };

  const content = (
    <LoginForm name="form" onSubmit={onSubmit} messages={messages}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.login.login}
        </Button>
      </Form.Item>
    </LoginForm>
  );

  return <LrWrapper title={messages.login.title} content={content}></LrWrapper>;
};

export default Login;
