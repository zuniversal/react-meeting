import React from 'react';
import SmartTable from '@/common/SmartTable';
import { Select, Upload } from 'antd';
import UploadCom from '@/components/Widgets/UploadCom';
import SmartUpload from '@/components/Widgets/SmartUpload';

const PaperApproveTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.name,
      dataIndex: 'name',
    },
    {
      title: messages.identity,
      dataIndex: 'identity',
    },
    {
      title: messages.emailAddr,
      dataIndex: 'emailAddr',
    },
    {
      title: messages.phone,
      dataIndex: 'phone',
    },
    {
      title: messages.payReview.isPay,
      dataIndex: 'isPay',
      render: (text, record, index, config) => {
        return (
          <Select
            defaultValue="Yes"
            bordered={false}
            onChange={props.setApprover}
            options={props.ynConfig}
          />
        );
      },
    },
    {
      sorter: true,
      sortKey: 'uploadTime',
      title: messages.uploadTime,
      dataIndex: 'uploadTime',
    },
  ];

  const extra = (text, record, index, props) => (
    <>
      <SmartUpload {...{}}>
        <a className="uploadLink">{props.messages.payReview.uploadReceipt}</a>
      </SmartUpload>
      {/* <UploadCom
        label={''}
        key={'paperURLObj'}
        action={'/api/uploadFile'}
        name={'paperURLObj'}
        uploadProps={{
          disabled: props.isDisabledAll || props.action === 'detail',
          accept: 'application/msword',
          multiple: true,
          listType: null,
        }}
        formAction={props.action}
        noRule
      >
      </UploadCom> */}
      <a
        onClick={() => {
          props.edit({
            action: 'approve',
            d_id: record.id,
          });
        }}
      >
        {props.messages.payReview.payTip}
      </a>
    </>
  );

  return (
    <SmartTable
      rowKey={'name'}
      columns={columns}
      extra={extra}
      {...props}
      rowSelection={null}
      noDefault
    ></SmartTable>
  );
};

export default PaperApproveTable;
