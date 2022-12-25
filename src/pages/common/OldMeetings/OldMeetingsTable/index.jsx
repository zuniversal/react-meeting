import React from 'react';
import SmartTable from '@/common/SmartTable';

const OldMeetingsTable = props => {
  const columns = [
    {
      title: props.messages.oldMeetings.time,
      dataIndex: 'time',
    },
    {
      title: props.messages.oldMeetings.place,
      dataIndex: 'place',
    },
  ];

  return (
    <SmartTable
      rowKey="time"
      columns={columns}
      className="whiteTable"
      {...props}
      rowSelection={null}
      pagination={null}
      noActionCol
    ></SmartTable>
  );
};

export default OldMeetingsTable;
