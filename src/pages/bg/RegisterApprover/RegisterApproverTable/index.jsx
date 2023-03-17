import React from 'react';
import SmartTable from '@/common/SmartTable';

const RegisterApproverTable = props => {
  const { messages } = props;
  const columns = [
    {
      title: messages.registerApprover.name,
      dataIndex: 'name',
    },
    // {
    //   title: messages.registerApprover.userName,
    //   dataIndex: 'userName',
    // },
    {
      title: messages.registerApprover.email,
      dataIndex: 'email',
    },
    {
      title: messages.registerApprover.pwd,
      dataIndex: 'phone',
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      locale="zh"
      rowKey="email"
    ></SmartTable>
  );
};

export default RegisterApproverTable;
