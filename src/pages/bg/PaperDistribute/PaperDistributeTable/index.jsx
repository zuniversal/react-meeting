import React, { useRef } from 'react';
import SmartTable from '@/common/SmartTable';
import { paperTypeConfigMap } from '@/configs';
import SmartForm from '@/common/SmartForm';
import { Select, Divider, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const PaperDistributeForm = props => {
  const { messages, record } = props;
  const ph = (
    <div>
      {messages.paperDistribute.distributeApprover}
      <CaretDownOutlined />
    </div>
  );

  const valueRef = useRef(null);
  const onChange = (selected, selectedList) => {
    console.log(' onChange ： ', selected, selectedList); //
    valueRef.current = selected;
  };
  const setApprover = params => {
    console.log(' setApprover ： ', params, valueRef.current); //
    props.setApprover(valueRef.current);
  };

  const config = [
    <Select
      key="tbSelect"
      mode="multiple"
      popupClassName="tbSelect"
      placeholder={ph}
      // defaultValue={[messages.paperDistribute.distributeApprover]}
      bordered={false}
      // onChange={props.setApprover}
      onChange={onChange}
      onFocus={() => props.getApproverList(record)}
      // onBlur={props.setApprover}
      options={props.approverList}
      dropdownRender={menu => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          {/* <div style={{textAlign: 'right'}}> */}
          <div className="tbSelectAction">
            <Button type="primary" onClick={setApprover}>
              {messages.paperDistribute.distribute}
            </Button>
          </div>
        </>
      )}
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
