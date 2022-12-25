import React from 'react';
import './style.less';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';

const UploadImgForm = props => {
  const { messages } = props;
  const config = [
    {
      itemProps: {
        label: messages.uploadImg.imgTitle,
        name: 'title',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'DatePicker',
      itemProps: {
        label: messages.uploadImg.imgTakeTime,
        name: 'time',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'TextArea',
      itemProps: {
        label: messages.uploadImg.imgDesc,
        name: 'note',
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
      label={messages.uploadImg.imgUpload}
      key={'urlObj'}
      action={'/api/uploadFile'}
      name={'urlObj'}
      text={messages.uploadImg.imgDrag}
      extra={messages.uploadImg.imgUploadTips}
      uploadProps={{
        disabled: props.isDisabledAll || props.action === 'detail',
        accept: 'application/msword',
        multiple: true,
        listType: null,
      }}
      formAction={props.action}
      noRule
    ></UploadCom>,
  ];

  return (
    <SmartForm
      className={'uploadImgForm'}
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default UploadImgForm;
