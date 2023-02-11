import React from 'react';
import SmartTable from '@/common/SmartTable';
import { downLoad } from '@/utils';
import { paperTypeConfigMap, noReviewConfig, paperStatusMap } from '@/configs';
import { useModel } from 'umi';

const PaperApproveTable = props => {
  const { messages } = props; //
  const { paperTypeListMap } = useModel('systemConfig');

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
      dataMap: paperTypeListMap,
    },
    // {
    //   title: messages.paperApprove.stage,
    //   dataIndex: 'paper',
    // },
    {
      title: messages.paperApprove.contactAuthor,
      dataIndex: 'contactAuthor',
    },
    {
      title: messages.paperApprove.commonAuthor,
      dataIndex: 'commonAuthor',
    },
    // {
    //   title: messages.paperApprove.approvalStatus,
    //   dataIndex: 'result',
    // },
    {
      title: messages.paperApprove.approvalStatus,
      dataIndex: 'sumResult',
      dataMap: paperStatusMap,
    },
    {
      // sorter: true,
      // sortKey: 'time',
      title: messages.paperApprove.submitTime,
      dataIndex: 'time',
    },
  ];

  const extra = (text, record, index, props) => (
    <>
      {noReviewConfig.some(v => v === record.sumResult) && (
        <a
          onClick={() => {
            props.edit({
              action: 'approve',
              record,
            });
          }}
        >
          {props.messages.review}
        </a>
      )}
      <a onClick={() => downLoad(record.paperURL, { name: record.paperURL })}>
        {messages.download}
      </a>
    </>
  );

  return (
    <SmartTable
      columns={columns}
      extra={extra}
      noDefault
      rowSelection={null}
      // locale="zh"
      {...props}
    ></SmartTable>
  );
};

export default PaperApproveTable;
