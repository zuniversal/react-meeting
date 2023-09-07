import React from 'react';
import SmartForm from '@/common/SmartForm';
import { emailRuleZh, pwdRuleZh, stringRuleZh } from '@/configs';
import { usePaperTypeReq } from '@/hooks/useDataReq';

const nameFormCol = {
  labelCol: {
    xs: { span: 12 },
  },
  wrapperCol: {
    xs: { span: 14 },
  },
};

const nameFormCol2 = {
  labelCol: {
    xs: { span: 10 },
  },
};

const formLayouts = {
  labelCol: {
    xs: { span: 6 },
  },
  wrapperCol: {
    // xs: { span: 6 },
  },
};

const RegisterApproverForm = props => {
  const { paperTypeList } = usePaperTypeReq();
  const { messages } = props;

  const config = [
    {
      itemProps: {
        label: messages.registerApprover.firstName,
        name: 'firstName',
        className: 'lrItem50 lrItem50-1',
        ...nameFormCol,
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [
        {
          ...stringRuleZh,
        },
      ],
    },
    {
      itemProps: {
        label: messages.registerApprover.lastName,
        name: 'secondName',
        className: 'lrItem50 lrItem50-1',
        ...nameFormCol2,
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [
        {
          ...stringRuleZh,
        },
      ],
    },
    {
      itemProps: {
        label: messages.registerApprover.email,
        name: 'email',
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [emailRuleZh],
    },
    {
      formType: 'Password',
      itemProps: {
        label: messages.registerApprover.pwd,
        name: 'password',
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [pwdRuleZh],
    },
    {
      formType: 'Select',
      itemProps: {
        label: messages.registerApprover.field,
        name: 'paperCateID',
      },
      comProps: {
        className: 'formItem',
        options: paperTypeList,
        mode: 'multiple',
      },
    },
  ];

  return (
    <SmartForm
      className={`lrForm`}
      // layout={'vertical'}
      // noLabelLayout
      config={config}
      {...props}
      noPh
      formLayouts={formLayouts}
    ></SmartForm>
  );
};

export default RegisterApproverForm;
