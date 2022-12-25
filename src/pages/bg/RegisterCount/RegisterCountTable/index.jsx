import React from 'react';
import SmartTable from '@/common/SmartTable';

const RegisterCountTable = props => {
  const columns = [
    {
      title: props.messages.name,
      dataIndex: 'name',
    },
    {
      title: props.messages.called,
      dataIndex: 'called',
    },
    {
      title: props.messages.emailAddr,
      dataIndex: 'emailAddr',
    },
    {
      title: props.messages.country,
      dataIndex: 'country',
    },
    {
      title: props.messages.phone,
      dataIndex: 'phone',
    },
    {
      title: props.messages.userCenter.unitName,
      dataIndex: 'unitName',
    },
    {
      title: props.messages.addr,
      dataIndex: 'addr',
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: props.messages.registerCount.regTime,
      dataIndex: 'regTime',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      noActionCol
    ></SmartTable>
  );
};

export default RegisterCountTable;
