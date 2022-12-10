import React from 'react';
import SmartForm from '@/common/SmartForm';

const TemplateForm2 = props => {
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
    {
      itemProps: {
        label: '单价(元)',
        name: 'price',
      },
    },
  ];

  return <SmartForm config={config} {...props}></SmartForm>;
};

export default TemplateForm2;
