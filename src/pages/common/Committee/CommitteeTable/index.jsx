import React from 'react';
import SmartTable from '@/common/SmartTable';

export const CommitteeTable = props => {
  const columns = [
    {
      title: props.messages.committee.region,
      dataIndex: 'region',
    },
    {
      title: props.messages.committee.position,
      dataIndex: 'post',
    },
    {
      title: props.messages.committee.name,
      dataIndex: 'name',
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
      dataIndex: 'company',
    },
    {
      title: props.messages.committee.position,
      dataIndex: 'status',
    },
    {
      title: props.messages.committee.name,
      dataIndex: 'name',
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
