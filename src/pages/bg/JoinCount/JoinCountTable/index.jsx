import React from 'react';
import SmartTable from '@/common/SmartTable';
import { hotelConfigMap, ynConfigMap } from '@/configs';

const JoinCountTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.joinCount.name,
      dataIndex: 'name',
    },
    {
      title: messages.joinCount.identity,
      dataIndex: 'title',
    },
    {
      title: messages.joinCount.email,
      dataIndex: 'email',
    },
    {
      title: messages.joinCount.phone,
      dataIndex: 'phone',
    },
    {
      title: messages.joinCount.isNeedPick,
      dataIndex: 'isGreet',
      dataMap: ynConfigMap,
    },
    {
      title: messages.joinCount.hotelName,
      dataIndex: 'hotelName',
      dataMap: hotelConfigMap,
    },
    {
      sorter: true,
      sortKey: 'arrivetime',
      title: messages.joinCount.arriveTime,
      dataIndex: 'arrivetime',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      noActionCol
      locale="zh"
      rowKey="email"
    ></SmartTable>
  );
};

export default JoinCountTable;
