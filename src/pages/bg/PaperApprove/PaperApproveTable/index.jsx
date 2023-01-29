import React from 'react';
import SmartTable from '@/common/SmartTable';
import { downLoad } from '@/utils';
import { paperTypeConfigMap } from '@/configs';

const PaperApproveTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.paperApprove.no,
      dataIndex: 'paperID',
    },
    {
      title: messages.paperApprove.paperTitle,
      dataIndex: 'title',
    },
    {
      title: messages.paperApprove.paperType,
      dataIndex: 'paperCateID',
      dataMap: paperTypeConfigMap,
    },
    {
      title: messages.paperApprove.stage,
      dataIndex: 'paper',
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
      dataIndex: 'result',
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
            record,
          });
        }}
      >
        {props.messages.paperApprove.approve}
      </a>
      <a onClick={() => downLoad(record.paperURL, { name: record.paperURL })}>
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
