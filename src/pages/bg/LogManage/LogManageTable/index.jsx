import React from 'react';
import SmartTable from '@/common/SmartTable';
import { hotelConfigMap, ynConfigMap } from '@/configs';

const LogManageTable = props => {
  const { messages } = props;
  const columns = [
    {
      title: messages.logManage.name,
      dataIndex: 'name',
    },
    {
      title: messages.logManage.email,
      dataIndex: 'email',
    },
    {
      title: messages.logManage.operatorType,
      dataIndex: 'type',
    },
    {
      title: messages.logManage.operatorStatus,
      dataIndex: 'status',
    },
    {
      title: messages.logManage.operatorContent,
      dataIndex: 'content',
    },
    {
      sorter: true,
      sortKey: 'date',
      title: messages.logManage.operatorTime,
      dataIndex: 'date',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      noActionCol
      locale="zh"
      rowKey="email"
    ></SmartTable>
  );
};

export default LogManageTable;
