import React from 'react';
import SmartTable from '@/common/SmartTable';

const PaperStatusTable = props => {
  const columns = [
    {
      title: props.messages.paperStatus.no,
      dataIndex: 'id',
    },
    {
      title: props.messages.paperStatus.paperTitle,
      dataIndex: 'title',
    },
    {
      title: props.messages.paperStatus.paperType,
      dataIndex: 'submitPaperCateID',
    },
    {
      title: props.messages.paperStatus.approvalStatus,
      dataIndex: 'sumResult',
    },
    {
      title: props.messages.paperStatus.expertOpinion,
      dataIndex: 'reviewOpinion',
    },
    {
      title: props.messages.paperStatus.submitTime,
      dataIndex: 'submitTime',
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
