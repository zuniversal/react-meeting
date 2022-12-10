import React from 'react';
import SmartForm from '@/common/SmartForm';

const TemplateForm = props => {
  const config = [
    {
      itemProps: {
        label: '物料编号',
        name: 'code',
      },
    },
    {
      itemProps: {
        label: '物料名称',
        name: 'name',
      },
    },
  ];

  return <SmartForm config={config} {...props}></SmartForm>;
};

export default TemplateForm;
