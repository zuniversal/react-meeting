import React from 'react';
import './style.less';
import { Input } from 'antd';
import { calledConfig, identityConfig } from '@/configs';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';

const UserInfoForm = props => {
  const { messages } = props;

  const uploadPdf = () => {
    console.log(' uploadPdf   ,   ： ');
  };

  const config = [
    <UploadCom
      label={messages.userCenter.changeAvatar}
      key={'circuit_imgs'}
      action={'/api/v1/upload'}
      name={'circuit_imgs'}
      extra={messages.userCenter.tips}
      uploadProps={{
        disabled: props.isDisabledAll || props.action === 'detail',
        accept: 'image/png,image/jpeg,image/pdf,application/pdf',
        multiple: true,
        listType: null,
      }}
      formAction={props.action}
      noRule
      formItemCls={'formItems'}
    >
      <Input
        className="uploadInput"
        addonAfter={<div onClick={uploadPdf}>{messages.upload}</div>}
        defaultValue={messages.userCenter.chooseFile}
      />
    </UploadCom>,
    {
      formType: 'Radio',
      itemProps: {
        label: messages.userCenter.called,
        name: 'called',
        className: 'radioFormItem',
      },
      comProps: {
        options: calledConfig,
      },
    },
    {
      itemProps: {
        label: messages.userCenter.surname,
        name: 'surname',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.userCenter.name,
        name: 'name',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.userCenter.email,
        name: 'email',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.userCenter.phone,
        name: 'phone',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.userCenter.unitName,
        name: 'unitName',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.userCenter.unitAddr,
        name: 'unitAddr',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'Radio',
      itemProps: {
        label: messages.userCenter.identity,
        name: 'dignity',
        className: 'radioFormItem ant-col-24',
      },
      comProps: {
        options: identityConfig,
      },
    },
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

export default UserInfoForm;
