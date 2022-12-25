import React from 'react';
import SmartTable from '@/common/SmartTable';

const JoinCountTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.name,
      dataIndex: 'name',
    },
    {
      title: messages.identity,
      dataIndex: 'identity',
    },
    {
      title: messages.emailAddr,
      dataIndex: 'emailAddr',
    },
    {
      title: messages.phone,
      dataIndex: 'phone',
    },
    {
      title: messages.isNeedPick,
      dataIndex: 'isNeedPick',
    },
    {
      title: messages.joinCount.hotelName,
      dataIndex: 'hotelName',
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: messages.joinCount.arriveTime,
      dataIndex: 'arriveTime',
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

export default JoinCountTable;
