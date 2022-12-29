import React from 'react';
import SmartTable from '@/common/SmartTable';

const UploadImgHistoryTable = props => {
  const columns = [
    {
      title: props.messages.uploadImgHistory.imgTitle,
      dataIndex: 'title',
    },
    {
      title: props.messages.uploadImgHistory.imgDesc,
      dataIndex: 'note',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      // rowSelection={null}
    ></SmartTable>
  );
};

export default UploadImgHistoryTable;
