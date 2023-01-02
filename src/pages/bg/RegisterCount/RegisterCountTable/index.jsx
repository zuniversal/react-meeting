import React from 'react';
import SmartTable from '@/common/SmartTable';

const RegisterCountTable = props => {
  const { messages } = props;
  const columns = [
    {
      title: messages.registerCount.name,
      dataIndex: 'name',
    },
    {
      title: messages.registerCount.called,
      dataIndex: 'called',
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
      dataIndex: 'addr',
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: messages.registerCount.regTime,
      dataIndex: 'regTime',
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
