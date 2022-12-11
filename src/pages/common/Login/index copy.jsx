import React from 'react';
import { Form, Button } from 'antd';
import { history, connect, useIntl, useModel } from 'umi';
import { mapStateToProps, mapDispatchToProps } from '@/models/user';
import LoginForm from './LoginForm';
import Header from '@/layouts/Header';
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
      setItem('xxx', remember ? params : undefined);
      loginAsync(params);
    } catch (error) {
      console.log(' onSubmit error ： ', error);
    }
  };

  return (
    <div className="lrWrapper">
      <Header></Header>
      <div className="lrFormWrapper">
        <div className="lrForm">
          <div className="sysystemTitle">{messages.login.title}</div>
          <LoginForm
            name="form"
            initialValues={{
              remember: true,
              username: '',
              password: '',
            }}
            onSubmit={onSubmit}
          >
            <Form.Item className={`btnFormItem`} noStyle>
              <Button type="primary" htmlType="submit" className="actionBtn">
                登录
              </Button>
            </Form.Item>
          </LoginForm>
        </div>
        <div className="bgPic"></div>
      </div>
    </div>
  );
};

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
