import React from 'react';
import SmartTable from '@/common/SmartTable';

const PaperCountTable = props => {
  const columns = [
    {
      title: props.messages.paperCount.no,
      dataIndex: 'no',
    },
    {
      title: props.messages.paperCount.paperTitle,
      dataIndex: 'paperTitle',
    },
    {
      title: props.messages.paperCount.paperType,
      dataIndex: 'paperType',
    },
    {
      title: props.messages.paperCount.contactAuthor,
      dataIndex: 'contactAuthor',
    },
    {
      title: props.messages.paperCount.commonAuthor,
      dataIndex: 'commonAuthor',
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: props.messages.uploadTime,
      dataIndex: 'uploadTime',
    },
    {
      title: props.messages.paperCount.approver,
      dataIndex: 'approver',
    },
    {
      title: props.messages.paperCount.approvalStatus,
      dataIndex: 'approvalStatus',
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

export default PaperCountTable;
