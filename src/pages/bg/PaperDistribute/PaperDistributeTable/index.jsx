import React, { useRef, useState } from 'react';
import SmartTable from '@/common/SmartTable';
import { paperTypeConfigMap } from '@/configs';
import SmartForm from '@/common/SmartForm';
import { Select, Divider, Button, Tag } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { PRIMARY } from '@/constants';

const PaperDistributeForm = props => {
  const [open, setOpen] = useState(false);
  const { messages, record } = props;
  const haveApprover = record.reviewerListId.length;
  console.log(
    ' PaperDistributeForm ： ',
    props,
    haveApprover,
    record.reviewerList,
  ); //
  const options = props.approverList.length
    ? props.approverList
    : record.approverList;
  const content = haveApprover
    ? record.reviewerList.map(v => (
        <Tag color={PRIMARY} key={v.id}>
          {v.name}
        </Tag>
      ))
    : messages.paperDistribute.distributeApprover;
  const ph = (
    <div>
      {content}
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
    setOpen(false);
  };
  const getApproverList = params => {
    console.log(' getApproverList ： ', params, record); //
    props.getApproverList(record);
    setOpen(true);
  };

  const config = [
    <Select
      key="tbSelect"
      mode="multiple"
      popupClassName="tbSelect"
      open={open}
      onDropdownVisibleChange={visible => setOpen(visible)}
      placeholder={ph}
      defaultValue={record.reviewerListId}
      bordered={false}
      // onChange={props.setApprover}
      onChange={onChange}
      onFocus={getApproverList}
      // onBlur={props.setApprover}
      options={options}
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
      dataIndex: 'paperID',
    },
    {
      title: messages.paperDistribute.paperTitle,
      dataIndex: 'title',
    },
    {
      title: messages.paperDistribute.approveStatus,
      dataIndex: 'sumResult',
    },
    {
      title: messages.paperDistribute.stage,
      dataIndex: 'paper',
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
      {record.sumResult !== '不通过' && (
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
      )}
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
