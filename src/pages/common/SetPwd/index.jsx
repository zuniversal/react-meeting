import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import SetPwdForm from './SetPwdForm';
import { setItems, getItems } from '@/utils';

const SetPwd = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' SetPwd   msg,   ： ', intl, messages);
  const { registerAsync } = useModel('users');
  const onSubmit = async formProps => {
    console.log('onSubmit 提交 : ', formProps, props, getItems('regInfo'));
    const { confirmPwd, ...rest } = formProps.values;
    const res = await registerAsync({
      ...getItems('regInfo'),
      ...rest,
    });
    console.log('  res await 结果  ：', res); //
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
