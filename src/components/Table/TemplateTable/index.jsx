import React from 'react';
import SmartTable from '@/common/SmartTable';

const TemplateTable = props => {
  console.log(' TemplateTable ： ', props); //
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: '姓名',
    },
    {
      title: '手机',
      dataIndex: '手机',
    },
  ];

  return <SmartTable columns={columns} {...props}></SmartTable>;
};

export default TemplateTable;
