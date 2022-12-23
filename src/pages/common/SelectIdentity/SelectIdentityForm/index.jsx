import React from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';
import { identityConfig } from '@/configs';
import { useIdentityForm } from '@/hooks/useFormItem';

const SelectIdentityForm = props => {
  const identityForm = useIdentityForm(props);
  identityForm.comProps.className = 'lrRadioCol'
  const { messages } = props;

  const config = [
    // {
    //   formType: 'Radio',
    //   itemProps: {
    //     label: messages.register.name,
    //     name: 'titleID',
    //   },
    //   comProps: {
    //     className: 'lrRadioCol',
    //     options: identityConfig,
    //   },
    // },
    identityForm,
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
