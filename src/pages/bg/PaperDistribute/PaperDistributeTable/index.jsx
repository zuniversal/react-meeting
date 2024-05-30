import React, { useRef, useState } from 'react';
import './style.less';
import SmartTable from '@/common/SmartTable';
import { ALL_MAN, paperTypeConfigMap } from '@/configs';
import SmartForm from '@/common/SmartForm';
import { Select, Divider, Button, Tag, Modal } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { PRIMARY, TYPE_ALL } from '@/constants';
import { downLoad } from '@/utils';
import { useModel } from 'umi';

let modal;
const warning = props => {
  console.log(' props warning ： ', props); //
  modal = Modal.confirm({
    title: '操作提示',
    content: (
      <div>
        <p>
          您选择的审稿人是: {props.approvers}，一旦确认就不能更改，是否确认？
        </p>
      </div>
    ),
    onOk: props.onOk,
    okText: '确认',
    cancelText: '取消',
    onCancel: props.onCancel,
  });
};

const PaperDistributeForm = props => {
  const [open, setOpen] = useState(false);
  const [approverIndex, setApproverIndex] = useState(0);
  const { messages, record } = props;
  // const haveApprover = record.reviewerListId.length;
  const haveApprover = record.sumResult.includes('待分配');
  console.log(
    ' PaperDistributeForm ： ',
    props,
    haveApprover,
    record.reviewerList,
  ); //
  // const options = props.approverList.length
  //   ? props.approverList
  //   : record.approverList;
  // all 类型的不用过滤审稿人
  const options =
    record.paperCateID == TYPE_ALL
      ? props.approverList
      : props.approverList.filter(
          v =>
            v.paperCate.includes(record.paperCateID) ||
            v.paperCate.includes(ALL_MAN),
        );
  console.log(' options ： ', options, props.approverList, record.paperCateID);
  const reviewerCom = record.reviewerList.map(v => (
    <Tag color={PRIMARY} key={v.id}>
      {v.name}
    </Tag>
  ));
  const content =
    record.reviewerListId.length > 0
      ? reviewerCom
      : messages.paperDistribute.distributeApprover;
  // const ph = messages.paperDistribute.distributeApprover
  const ph = (
    <div>
      {content}
      <CaretDownOutlined />
    </div>
  );

  const valueRef = useRef(null);
  const selectedListRef = useRef([]);
  const onChange = (selected, selectedList) => {
    console.log(' onChange ： ', selected, selectedList); //
    valueRef.current = selected;
    selectedListRef.current = selectedList;
  };
  const setApprover = params => {
    console.log(' setApprover ： ', params, valueRef.current); //
    props.setApprover(valueRef.current);
    setOpen(false);
    modal.destroy();
  };
  const onCancel = params => {
    console.log(' onCancel ： ', params, valueRef.current); //
    // props.setApprover([]);
    valueRef.current = null;
    setOpen(false);
    setApproverIndex(approverIndex + 1);
    modal.destroy();
  };
  const setApproverConfirm = params => {
    console.log(
      ' setApproverConfirm ： ',
      params,
      selectedListRef.current,
      selectedListRef.current.length > 0,
    ); //
    // if (selectedListRef.current.length > 0) {
    warning({
      approvers: selectedListRef.current.map(v => v.name).join('、'),
      onOk: setApprover,
      onCancel: onCancel,
    });
    // }
  };
  const getApproverList = params => {
    console.log(' getApproverList ： ', params, record); //
    props.getApproverList(record);
    setOpen(true);
  };

  const config = [
    <Select
      key={`tbSelect${approverIndex}`}
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
            {/* {!record.reviewerListId.length && (
              <Button onClick={onCancel}>{messages.cancel_zh}</Button>
            )} */}
            <Button onClick={onCancel}>{messages.cancel_zh}</Button>
            <Button type="primary" onClick={setApproverConfirm}>
              {messages.paperDistribute.distribute}
            </Button>
          </div>
        </>
      )}
    />,
  ];

  const formCom = (
    <SmartForm
      config={config}
      {...props}
      className={'paperDistributeForm'}
    ></SmartForm>
  );
  return formCom;
};

const paperDistributeTable = props => {
  const { messages } = props; //
  const { paperTypeListMap } = useModel('systemConfig');

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
      sorter: true,
      sortKey: 'status',
      title: messages.paperDistribute.approveStatus,
      dataIndex: 'status',
    },
    // {
    //   title: messages.paperDistribute.stage,
    //   dataIndex: 'paper',
    // },
    {
      sorter: true,
      sortKey: 'type',
      title: messages.paperDistribute.paperType,
      dataIndex: 'type',
      dataMap: paperTypeListMap,
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
      sortKey: 'time',
      title: messages.uploadTime,
      dataIndex: 'time',
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
        {/* <PaperDistributeForm record={record} {...props}></PaperDistributeForm> */}
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
      <a
        onClick={() => {
          const paperURLList = record.paperURL?.split('/');
          const fileName =
            record.paperID + paperURLList[paperURLList.length - 1];
          console.log('  fileName ：', fileName);
          downLoad(record.paperURL, { name: fileName });
        }}
      >
        {messages.showDetail}
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
