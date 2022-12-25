import React from 'react';
import SmartTable from '@/common/SmartTable';

const UploadImgHistoryTable = props => {
  const columns = [
    {
      title: props.messages.uploadImgHistory.imgTitle,
      dataIndex: 'imgTitle',
    },
    {
      title: props.messages.uploadImgHistory.imgDesc,
      dataIndex: 'imgDesc',
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
