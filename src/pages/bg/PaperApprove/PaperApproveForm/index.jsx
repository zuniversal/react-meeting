import React from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';
import { approveStatusConfig } from '@/configs';
import { approveConfig } from '../config';
import InfoDesc from '@/pages/common/components/InfoDesc';
import { DOC_TYPE } from '@/constants';

const PostPaperForm = props => {
  const { messages } = props;

  const config = [
    <InfoDesc
      key={'infoDesc'}
      data={props.itemDetail}
      messages={messages}
      msgKey={'paperApprove'}
      config={approveConfig}
      className={'infoDescCol3'}
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
        name: 'opinionText',
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
      key={'opinionURLObj'}
      action={'/api/uploadFile'}
      name={'opinionURLObj'}
      extra={messages.paperApprove.uploadTips}
      uploadProps={{
        disabled: props.isDisabledAll || props.action === 'detail',
        accept: DOC_TYPE,
        multiple: true,
      }}
      formAction={props.action}
      noRule
    ></UploadCom>,
    {
      formType: 'Radio',
      itemProps: {
        label: messages.paperApprove.approveResult,
        name: 'result',
        className: 'radioFormItem',
      },
      comProps: {
        options: approveStatusConfig,
      },
    },
  ];

  return (
    <SmartForm
      className={'infoDescCol3'}
      layout={'vertical'}
      noLabelLayout
      config={config}
      locale="zh"
      {...props}
    ></SmartForm>
  );
};

export default PostPaperForm;
