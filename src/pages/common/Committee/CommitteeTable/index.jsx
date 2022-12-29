import React from 'react';
import SmartTable from '@/common/SmartTable';

const pageConfig = {
  page_size: 50,
};

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
      rowKey="region"
      columns={columns}
      className="whiteTable"
      {...props}
      rowSelection={null}
      noActionCol
      searchInfo={pageConfig}
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
      rowKey="name"
      columns={columns}
      className="whiteTable"
      {...props}
      rowSelection={null}
      noActionCol
      searchInfo={pageConfig}
    ></SmartTable>
  );
};
