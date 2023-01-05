import React from 'react';
import { Form, Button } from 'antd';
import { history, useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import SetPwdForm from './SetPwdForm';
import { setItems, getItems } from '@/utils';

const SetPwd = props => {
  const { messages } = useIntl();
  const { registerAsync, setPwdAsync } = useModel('users');
  const {
    location: { pathname, query },
  } = history;
  console.log(' history ： ', history); //
  const onSubmit = async formProps => {
    console.log(
      'onSubmit 提交 : ',
      formProps,
      props,
      getItems('regInfo'),
      pathname,
      query.email,
    );
    const { confirmPwd, ...rest } = formProps.values;
    if (pathname === '/resetPwd') {
      console.log('  对吗  query.email ', query.email);
      if (query.email) {
        const res = await setPwdAsync({
          email: query.email,
          ...rest,
        });
        return;
      }
      return;
    } else {
      const res = await registerAsync({
        ...getItems('regInfo'),
        ...rest,
      });
      console.log('  res await 结果  ：', res); //
    }
  };

  const content = (
    <SetPwdForm name="form" onSubmit={onSubmit} messages={messages}>
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
