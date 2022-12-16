import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import SmartForm from '@/common/SmartForm';
import { identityConfig } from '@/configs';

const SelectIdentityForm = props => {
  const { messages } = useIntl();

  const config = [
    {
      formType: 'Radio',
      itemProps: {
        label: messages.register.name,
        name: 'titleID',
      },
      comProps: {
        className: 'lrRadioCol',
        options: identityConfig,
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

export default SelectIdentityForm;
