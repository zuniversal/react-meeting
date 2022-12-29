import React from 'react';
import SmartTable from '@/common/SmartTable';
import { Select } from 'antd';

const paperDistributeTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.paperDistribute.no,
      dataIndex: 'no',
    },
    {
      title: messages.paperDistribute.paperTitle,
      dataIndex: 'paperTitle',
    },
    {
      title: messages.paperDistribute.approveStatus,
      dataIndex: 'approveStatus',
    },
    {
      title: messages.paperDistribute.paperType,
      dataIndex: 'paperType',
    },
    {
      title: messages.paperDistribute.contactAuthor,
      dataIndex: 'contactAuthor',
    },
    {
      title: messages.paperDistribute.commonAuthor,
      dataIndex: 'commonAuthor',
    },
    {
      title: messages.paperDistribute.approver,
      dataIndex: 'approver',
      render: (text, record, index, config) => {
        // <div
        //   onClick={() => {
        //     props.setApprover({
        //       action: 'setApprover',
        //     });
        //   }}>{text}△</div>,
        return (
          <Select
            dropdownClassName="tbSelect"
            defaultValue="lucy"
            bordered={false}
            onChange={props.setApprover}
            options={props.approverList}
          />
        );
      },
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: messages.uploadTime,
      dataIndex: 'uploadTime',
    },
  ];

  return (
    <SmartTable
      rowKey={'no'}
      columns={columns}
      {...props}
      rowSelection={null}
      noActionCol
    ></SmartTable>
  );
};

export default paperDistributeTable;
