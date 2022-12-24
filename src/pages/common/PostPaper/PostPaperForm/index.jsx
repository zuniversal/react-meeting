import React from 'react';
import './style.less';
import { Input } from 'antd';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';
import { usePaperTypeForm } from '@/hooks/useFormItem';

const PostPaperForm = props => {
  const { messages } = props;
  const paperTypeForm = usePaperTypeForm(props);

  const uploadAuthFile = () => {
    console.log(' uploadAuthFile   ,   ： ');
  };
  const uploadPdf = () => {
    console.log(' uploadPdf   ,   ： ');
  };

  const config = [
    {
      itemProps: {
        label: messages.postPaper.postTitle,
        name: 'title',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.postAuth,
        name: 'contactAuthor',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.postCommonAuthor,
        name: 'commonAuthor',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.company,
        name: 'company',
      },
      comProps: {
        className: 'formItem',
      },
    },
    paperTypeForm,
    // {
    //   formType: 'InputNumber',  
    //   itemProps: {
    //     label: messages.postPaper.artType,
    //     name: 'submitPaperCateID',
    //   },
    //   comProps: {
    //     className: 'formItem',
    //   },
    // },
    // {
    //   itemProps: {
    //     label: messages.postPaper.uploadPost,
    //     name: 'uploadPost',
    //   },
    //   comProps: {
    //     className: 'formItem',
    //   },
    // },
    // {
    //   itemProps: {
    //     label: messages.postPaper.uploadDoc,
    //     name: 'uploadDoc',
    //   },
    //   comProps: {
    //     className: 'formItem',
    //   },
    // },
    // {
    //   itemProps: {
    //     label: messages.postPaper.uploadAuthFile,
    //     name: 'uploadAuthFile',
    //   },
    //   comProps: {
    //     className: 'formItem',
    //     addonAfter: <div onClick={uploadAuthFile}>{messages.upload}</div>
    //   },
    // },
    // {
    //   itemProps: {
    //     label: messages.postPaper.uploadPdf,
    //     name: 'uploadPdf',
    //   },
    //   comProps: {
    //     className: 'formItem',
    //     addonAfter: <div onClick={uploadPdf}>{messages.upload}</div>
    //   },
    // },
    <UploadCom
      label={messages.postPaper.uploadAuthFile}
      key={'paperURLObj'}
      action={'/api/uploadFile'}
      name={'paperURLObj'}
      extra={messages.postPaper.uploadDoc}
      uploadProps={{
        disabled: props.isDisabledAll || props.action === 'detail',
        accept: 'application/msword',
        multiple: true,
        listType: null,
      }}
      formAction={props.action}
      noRule
      formItemCls={'ant-col-12'}
    >
      <Input
        className="uploadInput"
        addonAfter={<div onClick={uploadPdf}>{messages.upload}</div>}
        defaultValue={messages.postPaper.chooseFile}
      />
    </UploadCom>,
    <UploadCom
      label={messages.postPaper.uploadPdf}
      key={'copyrightFileURLObj'}
      action={'/api/uploadFile'}
      name={'copyrightFileURLObj'}
      extra={messages.postPaper.uploadPdf}
      uploadProps={{
        disabled: props.isDisabledAll || props.action === 'detail',
        accept: 'image/pdf,application/pdf',
        multiple: true,
        listType: null,
      }}
      formAction={props.action}
      noRule
      formItemCls={'ant-col-12'}
    >
      <Input
        className="uploadInput"
        addonAfter={<div onClick={uploadPdf}>{messages.upload}</div>}
        defaultValue={messages.postPaper.chooseFile}
      />
    </UploadCom>,
  ];

  return (
    <SmartForm
      className={`dcForm`}
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default PostPaperForm;
