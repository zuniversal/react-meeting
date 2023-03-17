import React from 'react';
import { Form, Checkbox } from 'antd';
import SmartForm from '@/common/SmartForm';
import { INPUT_TXT_EN } from '@/constants';
import { pwdRule } from '@/configs';

const ChangePwdForm = props => {
  const { messages } = props;

  const config = [
    {
      formType: 'Password',
      itemProps: {
        label: messages.changePwd.oldPwd,
        name: 'oldPwd',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'Password',
      itemProps: {
        label: messages.changePwd.newPwd,
        name: 'password',
        extra: messages.changePwd.pwdTips,
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [pwdRule],
    },
    {
      formType: 'Password',
      itemProps: {
        label: messages.changePwd.newPwdConfirm,
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
        // placeholder: INPUT_TXT_EN + messages.changePwd.newPwd + ' again',
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

export default ChangePwdForm;
