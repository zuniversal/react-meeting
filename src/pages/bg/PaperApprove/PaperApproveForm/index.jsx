import React from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';
import { approveStatusConfig } from '@/configs';
import { approveConfig } from '../config';
import InfoDesc from '@/pages/common/components/InfoDesc';

const PostPaperForm = props => {
  const { messages } = props;

  const config = [
    <InfoDesc
      key={'infoDesc'}
      data={props.itemDetail}
      messages={messages}
      msgKey={'paperApprove'}
      config={approveConfig}
    ></InfoDesc>,
    // <div className="btnWrapper">
    //   <Button size='large' onClick={cancel}>
    //     {messages.cancel}
    //   </Button>
    //   <Button size='large' type="primary" htmlType="submit" className="rawBtn">
    //     {messages.publish}
    //   </Button>
    // </div>,
    {
      formType: 'TextArea',
      itemProps: {
        label: messages.paperApprove.advise,
        name: 'advise',
      },
      comProps: {
        className: 'formItem',
        autoSize: {
          minRows: 10,
          // maxRows: 5
        },
      },
    },
    <UploadCom
      label={messages.paperApprove.uploadAdvise}
      key={'paperURLObj'}
      action={'/api/uploadFile'}
      name={'paperURLObj'}
      extra={messages.paperApprove.uploadTips}
      uploadProps={{
        disabled: props.isDisabledAll || props.action === 'detail',
        accept: 'application/msword',
        multiple: true,
      }}
      formAction={props.action}
      noRule
    ></UploadCom>,
    {
      formType: 'Radio',
      itemProps: {
        label: messages.paperApprove.approveResult,
        name: 'approveResult',
        className: 'radioFormItem',
      },
      comProps: {
        options: approveStatusConfig,
      },
    },
  ];

  return (
    <SmartForm
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default PostPaperForm;
