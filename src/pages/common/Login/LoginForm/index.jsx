import React from 'react';
import './style.less';
import { Form, Checkbox } from 'antd';
import { history } from 'umi';
import SmartForm from '@/common/SmartForm';
import { emailRule } from '@/configs';

const LoginForm = props => {
  const { messages, isBgPlatform } = props;

  const [form] = Form.useForm();

  const goPage = path => {
    history.push(path);
  };

  const forgetPwd = async params => {
    console.log(' forgetPwd   params,   ： ', params);
    const res = await form.validateFields(['email']);
    console.log('  res await 结果  ：', res);
    props.forgetPwd(res);
  };

  const onFocus = () => {
    console.log(' onFocus   ,   ： ');
  };
  const onBlur = () => {
    console.log(' onBlur   ,   ： ');
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
      formRules: [emailRule],
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
    // ...(isBgPlatform
    //   ? [
    //       {
    //         noRule: true,
    //         formType: 'Checkbox',
    //         checkboxData: checkboxData,
    //         itemProps: {
    //           label: '',
    //           name: 'isReviewer',
    //           className: 'approverCheckbox',
    //         },
    //         comProps: {
    //           className: 'rememberItem',
    //         },
    //         extra: messages.admin.approverTips,
    //       },
    //     ]
    //   : []),
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
      {!isBgPlatform && (
        <Form.Item>
          {/* <span className="findPwd" onClick={() => goPage('forgetPwd')}> */}
          <a className="findPwd" onClick={forgetPwd}>
            {messages.login.findPwd}
          </a>
        </Form.Item>
      )}
    </Form.Item>,
  ];

  return (
    <SmartForm
      className="loginForm"
      layout={'vertical'}
      noLabelLayout
      config={config}
      propsForm={form}
      // init={{
      //   isReviewer: 0,
      // }}
      {...props}
      noPh
    ></SmartForm>
  );
};

export default LoginForm;
