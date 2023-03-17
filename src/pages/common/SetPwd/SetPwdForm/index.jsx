import React from 'react';
import { Form, Checkbox } from 'antd';
import SmartForm from '@/common/SmartForm';
import { pwdRule } from '@/configs';

const SetPwdForm = props => {
  const { messages } = props;

  const config = [
    {
      formType: 'Password',
      itemProps: {
        label: messages.login.password,
        name: 'password',
        extra: messages.login.pwdTips,
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [pwdRule],
    },
    {
      formType: 'Password',
      itemProps: {
        label: messages.login.confirmPwd,
        name: 'confirmPwd',
        hasFeedback: true,
        rules: [
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!'),
              );
            },
          }),
        ],
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
      noPh
    ></SmartForm>
  );
};

export default SetPwdForm;
