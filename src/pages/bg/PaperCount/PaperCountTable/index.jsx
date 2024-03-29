import React from 'react';
import SmartTable from '@/common/SmartTable';
import { PRIMARY } from '@/constants';
import { Tag } from 'antd';

const PaperCountTable = props => {
  const columns = [
    {
      title: props.messages.paperCount.no,
      dataIndex: 'paperID',
    },
    {
      title: props.messages.paperCount.paperTitle,
      dataIndex: 'title',
    },
    {
      sorter: true,
      sortKey: 'type',
      title: props.messages.paperCount.paperType,
      dataIndex: 'type',
    },
    {
      title: props.messages.paperCount.contactAuthor,
      dataIndex: 'contactAuthor',
    },
    {
      sorter: true,
      sortKey: 'status',
      title: props.messages.paperCount.approvalStatus,
      dataIndex: 'status',
    },
    {
      sorter: true,
      sortKey: 'time',
      title: props.messages.uploadTime,
      dataIndex: 'time',
    },
    {
      title: props.messages.paperCount.approver,
      dataIndex: 'reviewerList',
      render: (text, record, index, config) => {
        const content = record.reviewerList.map(v => (
          <Tag color={PRIMARY} key={v.id}>
            {v.name}
          </Tag>
        ));
        return content;
      },
    },
    {
      title: props.messages.paperCount.commonAuthor,
      dataIndex: 'commonAuthor',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      noActionCol
      locale="zh"
    ></SmartTable>
  );
};

export default PaperCountTable;
