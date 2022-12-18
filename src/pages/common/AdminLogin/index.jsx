import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import AdminLoginForm from './AdminLoginForm';
import { setItem, getItem } from '@/utils';

const Login = props => {
  const { messages } = useIntl();
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
    <AdminLoginForm name="form" onSubmit={onSubmit}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.login.login}
        </Button>
      </Form.Item>
    </AdminLoginForm>
  );

  return <LrWrapper title={messages.login.title} content={content}></LrWrapper>;
};

export default Login;
