import React from 'react';
import SmartTable from '@/common/SmartTable';
import { hotelConfigMap, ynConfigMap, paymentConfigMap } from '@/configs';
import { useSystemConfig } from '@/hooks/useSystemConfig';

const JoinCountTable = props => {
  const { messages } = props; //
  const { attendMethodListMap } = useSystemConfig();

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
      sorter: true,
      sortKey: 'greet',
      title: messages.joinCount.isNeedPick,
      dataIndex: 'greet',
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
    {
      title: messages.joinCount.isPay,
      dataIndex: 'isPay',
      dataMap: paymentConfigMap,
    },
    {
      title: messages.joinCount.attendMethod,
      dataIndex: 'attendMethod',
      dataMap: attendMethodListMap,
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
