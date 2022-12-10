import React from 'react';
import SmartTable from '@/common/SmartTable';
import {
  alarmRecordLevelMap,
  alarmRecordStatusMap,
  alarmRecordTypeMap,
} from '@/configs';
import { history } from 'umi';

const AlarmRecordTable = props => {
  console.log(' AlarmRecordTable ： ', props); //
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      sorter: true,
      sortKey: 'status',
      dataMap: alarmRecordStatusMap,
    },
    {
      title: '姓名',
      dataIndex: '姓名',
      dataMap: alarmRecordStatusMap,
    },
    {
      title: '手机',
      dataIndex: '手机',
      dataMap: alarmRecordStatusMap,
    },
    {
      title: '时间',
      dataIndex: '时间',
      sorter: true,
      sortKey: 'status',
      dataMap: alarmRecordStatusMap,
    },
    {
      title: '岗位',
      dataIndex: '岗位',
      dataMap: alarmRecordStatusMap,
    },
    {
      title: '业务部门',
      dataIndex: '业务部门',
      dataMap: alarmRecordStatusMap,
    },
    {
      title: '角色',
      dataIndex: '角色',
      dataMap: alarmRecordStatusMap,
    },
  ];

  return <SmartTable columns={columns} {...props}></SmartTable>;
};

export default AlarmRecordTable;
