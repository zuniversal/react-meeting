import React from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';
import { identityConfig } from '@/configs';
import { useIdentityForm } from '@/hooks/useFormItem';

const SelectIdentityForm = props => {
  const { messages } = props;
  const identityForm = useIdentityForm(props);
  identityForm.itemProps.label = messages.post.selectIdentity;
  identityForm.comProps.className = 'lrRadioCol';

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
      className={'selectIdentityForm'}
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default SelectIdentityForm;
