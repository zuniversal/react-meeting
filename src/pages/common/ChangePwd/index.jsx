import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import ChangePwdForm from './ChangePwdForm';

const ChangePwd = props => {
  const { messages } = useIntl();
  const { userInfo, setPwdAsync } = useModel('users');
  const onSubmit = async formProps => {
    console.log('onSubmit 提交 : ', formProps, props, userInfo);
    const { confirmPwd, ...rest } = formProps.values;
    const res = await setPwdAsync({
      email: userInfo.email,
      ...rest,
    });
    console.log('  res await 结果  ：', res); //
  };

  const content = (
    <ChangePwdForm name="form" onSubmit={onSubmit} messages={messages}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.confirm}
        </Button>
      </Form.Item>
    </ChangePwdForm>
  );

  return (
    <LrWrapper title={messages.changePwd.title} content={content}></LrWrapper>
  );
};

export default ChangePwd;
