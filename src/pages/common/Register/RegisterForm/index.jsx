import React from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';
import { calledConfig, emailRule, phoneRule, stringNameRule } from '@/configs';
import { useCalledForm } from '@/hooks/useFormItem';

const RegisterForm = props => {
  const { messages } = props;
  const calledForm = useCalledForm(props);
  console.log(' calledForm ： ', calledForm); //

  const config = [
    // {
    //   formType: 'Radio',
    //   itemProps: {
    //     label: messages.register.callID,
    //     name: 'callID',
    //   },
    //   comProps: {
    //     options: calledConfig,
    //   },
    // },
    calledForm,
    {
      itemProps: {
        label: messages.register.firstName,
        name: 'firstName',
        className: 'lrItem50 lrItem50-1',
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [stringNameRule],
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
      formRules: [stringNameRule],
    },
    {
      itemProps: {
        label: messages.login.emailAddr,
        name: 'email',
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [emailRule],
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
      formRules: [phoneRule],
    },
    {
      formType: 'TextArea',
      itemProps: {
        label: messages.register.companyName,
        name: 'unitName',
      },
      comProps: {
        className: 'formItem',
        autoSize: {
          minRows: 2,
        },
      },
    },
    {
      formType: 'TextArea',
      itemProps: {
        label: messages.register.addr,
        name: 'unitAddress',
      },
      comProps: {
        className: 'formItem',
        autoSize: {
          minRows: 2,
        },
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

export default RegisterForm;
