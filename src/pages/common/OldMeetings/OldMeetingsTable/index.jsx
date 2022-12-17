import React from 'react';
import SmartTable from '@/common/SmartTable';

const OldMeetingsTable = props => {
  const columns = [
    {
      title: props.messages.oldMeetings.time,
      dataIndex: 'id',
    },
    {
      title: props.messages.oldMeetings.place,
      dataIndex: '姓名',
    },
  ];

  return <SmartTable 
    columns={columns} 
    {...props}
    rowSelection={null}
    noActionCol
  ></SmartTable>;
};

export default OldMeetingsTable;
