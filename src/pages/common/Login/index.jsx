import React from 'react';
import './style.less';
import { Form,  Button, } from 'antd';
import { history, connect, FormattedMessage, useIntl, SelectLang, setLocale, } from 'umi';
import { mapStateToProps, mapDispatchToProps } from '@/models/user';
import LoginForm from './LoginForm';
import Header from '@/layouts/Header';
import { regester, login, getCalled, } from '@/services/user';
import { setItem, getItem, } from '@/utils';

const Login = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' Login   msg,   ： ', intl, messages);
  setTimeout(() => {
    console.log('  延时器 ： ',  )
    // setLocale('en-US');
    setLocale('zh-CN');
    console.log(' Login   messages2,   ： ', intl, messages);
  }, 8000)

  const regesterFn = () => {
    console.log(' regesterFn   ,   ： ',   )
    regester({
      "callID":1,
      "firstName":"庄",
      "secondName":"宇彬",
      "email":"6046884891@qq.com",
      "country":"中国",
      "phone":"15160208606",
      "unitName":"国家队",
      "unitAddress": "",
      "titleID": 1,
      "password": "1"
    }).then(res => {
      console.log(' regester res  ： ', res,  )
    })
  }
  // regesterFn()
  const getCalledFn = () => {
    getCalled().then(res => {
      console.log(' getCalled res  ： ', res,  )
    })
  }
  getCalledFn()
  const loginFn = () => {
    login({
      "email":"6046884891@qq.com",
      "password": "1",
      // "email":"123@123.com",
      // "password":"password123"
    }).then(res => {
      console.log(' login res  ： ', res,  )
    })
  }
  loginFn()
  

  const [form] = Form.useForm();

  const goPage = path => {
    console.log(' goPage   path,   ： ', path);
    history.push(path);
  };

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    try {
      const { remember = [], ...params } = formProps.values;
      console.log('  对吗  remember ', remember, getItem('remember'), getItem('rememberInfo')   )
      if (remember.length) {
        setItem('rememberInfo', params)
      }
      setItem('remember', !!remember.length)
      props.loginAsync({
        ...params,
      });
    } catch (error) {
      console.log(' onSubmit error ： ', error);
    }
  };

  return (
    <div className="lrWrapper">
      <Header isShowTabs={false}></Header>
      <div className="lrFormWrapper">
        <div className="lrForm">
          <div className="sysystemTitle">
            {messages.login.title}
          </div>
          <LoginForm
            name="form"
            initialValues={{
              remember: true,
              username: 'admin',
              password: 'afafa',
              username: '',
              password: '',
            }}
            onSubmit={onSubmit}
          >
            <Form.Item className={`btnFormItem`} noStyle>
              <Button type="primary" htmlType="submit" className="actionBtn">
                登录
              </Button>
              <div className="extraRow">
                <div className="df">
                  <div className="">还没账号？</div>
                </div>
              </div>
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
