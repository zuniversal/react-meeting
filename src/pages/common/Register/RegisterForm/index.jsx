import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import SmartForm from '@/common/SmartForm';
import { calledConfig } from '@/configs';

const RegisterForm = props => {
  const { messages } = useIntl();

  const config = [
    {
      formType: 'Radio',
      itemProps: {
        label: messages.register.callID,
        name: 'password',
      },
      comProps: {
        options: calledConfig,
      },
    },
    {
      itemProps: {
        label: messages.register.firstName,
        name: 'firstName',
        className: 'lrItem50 lrItem50-1',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.register.lastName,
        name: 'secondName',
        className: 'lrItem50',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.login.emailAddr,
        name: 'email',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.register.country,
        name: 'country',
        className: 'lrItem50 lrItem50-1',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.register.tel,
        name: 'phone',
        className: 'lrItem50',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.register.companyName,
        name: 'unitName',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.register.addr,
        name: 'unitAddress',
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

export default RegisterForm;
