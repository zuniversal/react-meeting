import React from 'react';
import SmartTable from '@/common/SmartTable';

export const CommitteeTable = props => {
  const columns = [
    {
      title: props.messages.committee.area,
      dataIndex: 'id',
    },
    {
      title: props.messages.committee.position,
      dataIndex: '姓名',
    },
    {
      title: props.messages.committee.name,
      dataIndex: '手机',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      className="whiteTable"
      {...props}
      rowSelection={null}
      noActionCol
    ></SmartTable>
  );
};

export const CommitteeLocaleTable = props => {
  const columns = [
    {
      title: props.messages.committee.workUnit,
      dataIndex: 'id',
    },
    {
      title: props.messages.committee.position,
      dataIndex: '姓名',
    },
    {
      title: props.messages.committee.name,
      dataIndex: '手机',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      className="whiteTable"
      {...props}
      rowSelection={null}
      pagination={null}
      noActionCol
    ></SmartTable>
  );
};
