import React from 'react';
import SmartTable from '@/common/SmartTable';

const PaperApproveTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.paperApprove.no,
      dataIndex: 'no',
    },
    {
      title: messages.paperApprove.paperTitle,
      dataIndex: 'paperTitle',
    },
    {
      title: messages.paperApprove.paperType,
      dataIndex: 'paperType',
    },
    {
      title: messages.paperApprove.contactAuthor,
      dataIndex: 'contactAuthor',
    },
    {
      title: messages.paperApprove.commonAuthor,
      dataIndex: 'commonAuthor',
    },
    {
      title: messages.paperApprove.approvalStatus,
      dataIndex: 'approvalStatus',
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: messages.uploadTime,
      dataIndex: 'uploadTime',
    },
  ];

  const extra = (text, record, index, props) => (
    <>
      <a
        onClick={() => {
          props.edit({
            action: 'approve',
            d_id: record.id,
          });
        }}
      >
        {props.messages.paperApprove.approve}
      </a>
      <a
        onClick={() => {
          props.edit({
            action: 'approve',
            d_id: record.id,
          });
        }}
      >
        {props.messages.download}
      </a>
    </>
  );

  return (
    <SmartTable
      columns={columns}
      extra={extra}
      {...props}
      rowSelection={null}
      noDefault
    ></SmartTable>
  );
};

export default PaperApproveTable;
