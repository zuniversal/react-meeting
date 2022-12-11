import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import SetPwdForm from './SetPwdForm';
import { setItem, getItem } from '@/utils';

const SetPwd = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' SetPwd   msg,   ： ', intl, messages);
  const { loginAsync } = useModel('users');
  console.log(' loginAsync ： ', loginAsync);
  const onSubmit = params => {
    console.log('onSubmit 提交 : ', params, props);
    // loginAsync(params);
  };

  const content = (
    <SetPwdForm name="form" onSubmit={onSubmit}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.confirm}
        </Button>
      </Form.Item>
    </SetPwdForm>
  );

  return (
    <LrWrapper title={messages.register.regTitle} content={content}></LrWrapper>
  );
};

export default SetPwd;
