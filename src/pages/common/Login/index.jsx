import React from 'react';
import { Form, Button } from 'antd';
import { history, useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import LoginForm from './LoginForm';
import { setItem, getItem } from '@/utils';

const Login = props => {
  const { messages } = useIntl();
  console.log(' Login   msg,   ： ', messages, history);
  const {
    location: { query },
  } = history;
  const isBgPlatform = !!query.p;
  const { loginAsync, forgetPwdAsync } = useModel('users');
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
      const loginData = {
        ...params,
        role: isBgPlatform ? 'bg' : 'fe',
        // isReviewer: params.isReviewer && params.isReviewer[0],
      };
      setItem('loginInfo', remember ? loginData : undefined);
      setItem('remember', !!remember);
      loginAsync({
        ...loginData,
        isBgPlatform,
      });
    } catch (error) {
      console.log(' onSubmit error ： ', error);
    }
  };

  const forgetPwd = params => {
    console.log(' forgetPwd   params,   ： ', params);
    forgetPwdAsync(params);
  };

  const content = (
    <LoginForm
      name="form"
      onSubmit={onSubmit}
      messages={messages}
      isBgPlatform={isBgPlatform}
      forgetPwd={forgetPwd}
    >
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.login.login}
        </Button>
      </Form.Item>
    </LoginForm>
  );

  return (
    <LrWrapper
      isBgPlatform={isBgPlatform}
      bgTitle={messages.expertPlatform}
      title={messages.login.title}
      content={content}
    ></LrWrapper>
  );
};

export default Login;
