import React from 'react';
import SmartTable from '@/common/SmartTable';
import { Select, Upload } from 'antd';
import UploadCom from '@/components/Widgets/UploadCom';
import SmartUpload from '@/components/Widgets/SmartUpload';

const PaperApproveTable = props => {
  const { messages } = props;
  const columns = [
    {
      title: messages.payReview.name,
      dataIndex: 'name',
    },
    {
      title: messages.payReview.identity,
      dataIndex: 'identityMap',
    },
    {
      title: messages.payReview.emailAddr,
      dataIndex: 'email',
    },
    {
      title: messages.payReview.phone,
      dataIndex: 'phone',
    },
    {
      title: messages.payReview.isPay,
      dataIndex: 'isPayMap',
      // render: (text, record, index, config) => {
      //   return (
      //     <Select
      //       defaultValue="Yes"
      //       bordered={false}
      //       onChange={props.setApprover}
      //       options={props.ynConfig}
      //     />
      //   );
      // },
    },
  ];

  const extra = (text, record, index, props) => {
    const uploadProps = {
      finish: e => props.uploadReceipt(e, record),
      accept: 'image/png,image/jpeg',
    };
    return (
      <>
        {record.isPay == 0 && (
          <SmartUpload {...uploadProps}>
            <a className="uploadLink">
              {props.messages.payReview.uploadReceipt}
            </a>
          </SmartUpload>
        )}
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
        {record.isPay == 0 && record.warmPay == 0 && (
          <a
            onClick={() => {
              props.alertPay(record);
            }}
          >
            {props.messages.payReview.payTip}
          </a>
        )}
      </>
    );
  };

  return (
    <SmartTable
      rowKey={'email'}
      columns={columns}
      extra={extra}
      {...props}
      rowSelection={null}
      noDefault
      locale="zh"
    ></SmartTable>
  );
};

export default PaperApproveTable;
