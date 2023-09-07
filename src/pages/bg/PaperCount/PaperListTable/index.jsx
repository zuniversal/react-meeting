import React from 'react';
import SmartTable from '@/common/SmartTable';
import { PRIMARY } from '@/constants';
import { Tag } from 'antd';

const PaperListTable = props => {
  const columns = [
    {
      title: props.messages.paperCount.paperType,
      dataIndex: 'type',
    },
    {
      title: props.messages.paperCount.abstractNum,
      dataIndex: 'abstractNum',
    },
    {
      title: props.messages.paperCount.paperNum,
      dataIndex: 'paperNum',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      noActionCol
      locale="zh"
      rowKey="type"
      pagination={false}
    ></SmartTable>
  );
};

export default PaperListTable;
