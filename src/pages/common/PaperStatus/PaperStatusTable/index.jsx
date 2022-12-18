import React from 'react';
import SmartTable from '@/common/SmartTable';

const PaperStatusTable = props => {
  const columns = [
    {
      title: props.messages.paperStatus.no,
      dataIndex: 'no',
    },
    {
      title: props.messages.paperStatus.paperTitle,
      dataIndex: 'paperTitle',
    },
    {
      title: props.messages.paperStatus.paperType,
      dataIndex: 'paperType',
    },
    {
      title: props.messages.paperStatus.approvalStatus,
      dataIndex: 'approvalStatus',
    },
    {
      title: props.messages.paperStatus.expertOpinion,
      dataIndex: 'expertOpinion',
    },
    {
      title: props.messages.uploadTime,
      dataIndex: 'uploadTime',
    },
  ];

  const extra = (text, record, index, props) => (
    <>
      <a
        onClick={() => {
          props.edit({
            action: 'approvalPass',
            d_id: record.id,
          });
        }}
      >
        {props.messages.remove}
      </a>
      <a
        onClick={() => {
          props.edit({
            action: 'approvalPass',
            d_id: record.id,
          });
        }}
      >
        {props.messages.showDetail}
      </a>
      <a
        onClick={() => {
          props.edit({
            action: 'approvalPass',
            d_id: record.id,
          });
        }}
      >
        {props.messages.paperStatus.uploadEditedPaper}
      </a>
    </>
  );

  return (
    <SmartTable
      columns={columns}
      extra={extra}
      noDefault
      {...props}
    ></SmartTable>
  );
};

export default PaperStatusTable;
