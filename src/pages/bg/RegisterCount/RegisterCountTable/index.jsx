import React from 'react';
import SmartTable from '@/common/SmartTable';
import { calledConfigMap } from '@/configs';

const RegisterCountTable = props => {
  console.log(' RegisterCountTable ： ', props); //
  const { messages } = props;
  const columns = [
    {
      title: messages.registerCount.name,
      dataIndex: 'name',
    },
    {
      title: messages.registerCount.called,
      dataIndex: 'callID',
      dataMap: calledConfigMap,
    },
    {
      title: messages.registerCount.email,
      dataIndex: 'email',
    },
    {
      title: messages.registerCount.country,
      dataIndex: 'country',
    },
    {
      title: messages.registerCount.phone,
      dataIndex: 'phone',
    },
    {
      title: messages.registerCount.unitName,
      dataIndex: 'unitName',
    },
    {
      title: messages.registerCount.addr,
      dataIndex: 'unitAddress',
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: messages.registerCount.regTime,
      dataIndex: 'regesterTime',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      noActionCol
      locale="zh"
    ></SmartTable>
  );
};

export default RegisterCountTable;
