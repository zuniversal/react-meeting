import React from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';

const SelectDownlaodForm = props => {
  console.log(' SelectDownlaodForm ： ', props); //
  const { messages } = props;

  const config = [
    {
      formType: 'Checkbox',
      checkboxData: props.checkboxData,
      itemProps: {
        label: null,
        name: 'types',
      },
    },
  ];

  return (
    <SmartForm
      layout={'vertical'}
      noLabelLayout
      config={config}
      locale="zh"
      className={'selectDownlaodForm'}
      {...props}
    ></SmartForm>
  );
};

export default SelectDownlaodForm;
