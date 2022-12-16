import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel, history } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import RegisterForm from './RegisterForm';
import { setItems, getItems } from '@/utils';

const Register = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' Register   msg,   ： ', intl, messages);
  const { registerAsync } = useModel('users');

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    const datas = {
      callID: 1,
      firstName: '庄',
      secondName: '宇彬',
      email: '604688489@qq.com',
      country: '中国',
      phone: '15160208606',
      unitName: '联合国',
      unitAddress: '北京',
      titleID: 1,
      password: '1',
    };
    setItems('regInfo', datas);
    history.push('/selectIdentity');
  };

  const content = (
    <RegisterForm name="form" onSubmit={onSubmit}>
      <div onClick={onSubmit}>onSubmit</div>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.nextStep}
        </Button>
      </Form.Item>
    </RegisterForm>
  );

  return (
    <LrWrapper
      title={messages.register.regAccount}
      content={content}
    ></LrWrapper>
  );
};

export default Register;
