import React from 'react';
import SmartTable from '@/common/SmartTable';
import { downLoad } from '@/utils';
import { downUrlKeys } from '../config';

const batchDown = (data, urlKeys = downUrlKeys) =>
  urlKeys.filter(k => data[k]).map(k => downLoad(data[k], { name: data[k] }));

const PaperStatusTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.paperStatus.no,
      dataIndex: 'id',
    },
    {
      title: messages.paperStatus.paperTitle,
      dataIndex: 'title',
    },
    {
      title: messages.paperStatus.paperType,
      dataIndex: 'submitPaperCateID',
    },
    {
      title: messages.paperStatus.approvalStatus,
      dataIndex: 'sumResult',
    },
    {
      title: messages.paperStatus.adviseText,
      dataIndex: 'adviseText',
      // detailFn: record =>
      //   props.showAdviseText({
      //     action: 'showAdviseText',
      //     d_id: record.customer_id,
      //     record,
      //   }),
      render: (text, record, index, config) => {
        return (
          <div
            onClick={() =>
              props.showAdviseText({
                action: 'showAdviseText',
                d_id: record.customer_id,
                record,
              })
            }
          >
            {messages.paperStatus.adviseText}
          </div>
        );
      },
    },
    {
      title: messages.paperStatus.adviseFile,
      dataIndex: 'adviseFile',
      render: (text, record, index, config) => {
        return (
          downUrlKeys.filter(k => record[k]).length > 0 && (
            <a onClick={() => batchDown(record)}>
              {messages.paperStatus.adviseFile}
            </a>
          )
        );
      },
    },
    {
      title: messages.paperStatus.submitTime,
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
        {messages.delete}
      </a>
      <a
        onClick={() => {
          props.edit({
            action: 'showDetail',
            d_id: record.id,
          });
        }}
      >
        {messages.check}
      </a>
      <a
        onClick={() => {
          props.edit({
            action: 'uploadEditedPaper',
            d_id: record.id,
          });
        }}
      >
        {messages.paperStatus.uploadEditedPaper}
      </a>
      <a
        onClick={() => {
          props.edit({
            action: 'uploadEditedRevision',
            d_id: record.id,
          });
        }}
      >
        {messages.paperStatus.uploadEditedRevision}
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
