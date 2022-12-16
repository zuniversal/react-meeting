import React from 'react';
import { Form, Checkbox } from 'antd';
import { useIntl } from 'umi';
import SmartForm from '@/common/SmartForm';

const SetPwdForm = props => {
  const { messages } = useIntl();

  const config = [
    {
      itemProps: {
        label: messages.login.password,
        name: 'password',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.login.confirmPwd,
        name: 'confirmPwd',
      },
      comProps: {
        className: 'formItem',
      },
    },
  ];

  return (
    <SmartForm
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default SetPwdForm;
