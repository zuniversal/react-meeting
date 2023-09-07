import React from 'react';
import SmartTable from '@/common/SmartTable';
import { usePaperTypeReq } from '@/hooks/useDataReq';

const RegisterApproverTable = props => {
  const { paperTypeList } = usePaperTypeReq();
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
      dataIndex: 'password',
    },
    {
      title: messages.registerApprover.field,
      dataIndex: 'paperCateID',
      render: (text, record, index, config) => {
        console.log(
          ' paperTypeList, text, record ： ',
          paperTypeList,
          text,
          record,
          record.paperCateID,
          record.paperCateID.length,
        );
        if (record.paperCateID.length) {
          const content = record.paperCateID
            .map(v => {
              const matchItem = paperTypeList.find(item => item.id == v);
              return matchItem?.paperCateName;
            })
            .join('、');
          console.log(' content ： ', content);
          return content;
        }
      },
    },
  ];

  return (
    <SmartTable
      columns={columns}
      {...props}
      rowSelection={null}
      locale="zh"
      rowKey="email"
      noActionCol
    ></SmartTable>
  );
};

export default RegisterApproverTable;
