import React from 'react';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import LrWrapper from '@/pages/common/components/LrWrapper';
import SelectIdentityForm from './SelectIdentityForm';
import { setItem, getItem } from '@/utils';

const SelectIdentity = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' SelectIdentity   msg,   ： ', intl, messages);
  const { loginAsync } = useModel('users');
  console.log(' loginAsync ： ', loginAsync);

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
  };

  const content = (
    <SelectIdentityForm name="form" onSubmit={onSubmit}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.nextStep}
        </Button>
      </Form.Item>
    </SelectIdentityForm>
  );

  return (
    <LrWrapper
      title={messages.post.selectIdentity}
      content={content}
    ></LrWrapper>
  );
};

export default SelectIdentity;
