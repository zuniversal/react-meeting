import React from 'react';
import SmartTable from '@/common/SmartTable';

import { Select } from 'antd';
import { paperTypeConfigMap } from '@/configs';
import SmartForm from '@/common/SmartForm';

const PaperDistributeForm = props => {
  const { messages, record } = props;
  const config = [
    <Select
      key="tbSelect"
      mode="multiple"
      popupClassName="tbSelect"
      placeholder={messages.paperDistribute.distributeApprover}
      defaultValue={[messages.paperDistribute.distributeApprover]}
      bordered={false}
      onChange={props.setApprover}
      onFocus={() => props.getApproverList(record)}
      // onBlur={props.setApprover}
      options={props.approverList}
    />,
  ];

  return <SmartForm config={config} {...props}></SmartForm>;
};

const paperDistributeTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.paperDistribute.no,
      dataIndex: 'id',
    },
    {
      title: messages.paperDistribute.paperTitle,
      dataIndex: 'title',
    },
    {
      title: messages.paperDistribute.approveStatus,
      dataIndex: 'approveStatus',
    },
    {
      title: messages.paperDistribute.paperType,
      dataIndex: 'paperCateID',
      dataMap: paperTypeConfigMap,
    },
    {
      title: messages.paperDistribute.contactAuthor,
      dataIndex: 'contactAuthor',
    },
    {
      title: messages.paperDistribute.commonAuthor,
      dataIndex: 'commonAuthor',
    },
    // {
    //   title: messages.paperDistribute.approver,
    //   dataIndex: 'approver',
    //   render: (text, record, index, config) => {
    //     // <div
    //     //   onClick={() => {
    //     //     props.setApprover({
    //     //       action: 'setApprover',
    //     //     });
    //     //   }}>{text}△</div>,
    //     return (
    //       <Select
    //         dropdownClassName="tbSelect"
    //         defaultValue="lucy"
    //         bordered={false}
    //         onChange={props.setApprover}
    //         options={props.approverList}
    //       />
    //     );
    //   },
    // },
    {
      sorter: true,
      sortKey: 'submitTime',
      title: messages.uploadTime,
      dataIndex: 'submitTime',
    },
  ];

  const extra = (text, record, index, props) => (
    <>
      <a>
        {/* <Select
          popupClassName="tbSelect"
          value={messages.paperDistribute.distributeApprover}
          bordered={false}
          onChange={props.setApprover}
          onFocus={() => props.getApproverList(record)}
          // onBlur={props.setApprover}
          options={props.approverList}
        /> */}
        <PaperDistributeForm record={record} {...props}></PaperDistributeForm>
      </a>
      <a
        onClick={() => {
          props.edit({
            action: 'noApprove',
            record,
          });
        }}
      >
        {messages.paperDistribute.noApprove}
      </a>
    </>
  );

  return (
    <SmartTable
      columns={columns}
      extra={extra}
      {...props}
      rowSelection={null}
      noDefault
      locale="zh"
    ></SmartTable>
  );
};

export default paperDistributeTable;
