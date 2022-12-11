import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import RegisterForm from './RegisterForm';
import { setItem, getItem } from '@/utils';

const Register = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' Register   msg,   ： ', intl, messages);
  const { loginAsync } = useModel('users');
  console.log(' loginAsync ： ', loginAsync);

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
  };

  const content = (
    <RegisterForm name="form" onSubmit={onSubmit}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.nextStep}
        </Button>
      </Form.Item>
    </RegisterForm>
  );

  return (
    <LrWrapper title={messages.register.title} content={content}></LrWrapper>
  );
};

export default Register;
