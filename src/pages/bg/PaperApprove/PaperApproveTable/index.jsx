import React from 'react';
import SmartTable from '@/common/SmartTable';
import { downLoad } from '@/utils';

const PaperApproveTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.paperApprove.no,
      dataIndex: 'id',
    },
    {
      title: messages.paperApprove.paperTitle,
      dataIndex: 'title',
    },
    {
      title: messages.paperApprove.paperType,
      dataIndex: 'submitPaperCateID',
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
      dataIndex: 'sumResult',
    },
    {
      sorter: true,
      sortKey: 'submitTime',
      title: messages.uploadTime,
      dataIndex: 'submitTime',
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
        onClick={() =>
          downLoad(record.firstOpinionURL, { name: record.firstOpinionURL })
        }
      >
        {messages.download_zh}
      </a>
    </>
  );

  return (
    <SmartTable
      columns={columns}
      extra={extra}
      {...props}
      noDefault
      locale="zh"
    ></SmartTable>
  );
};

export default PaperApproveTable;
