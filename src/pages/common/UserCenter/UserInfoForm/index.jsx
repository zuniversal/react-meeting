import React from 'react';
import './style.less';
import { Input } from 'antd';
import {
  calledConfig,
  emailRule,
  identityConfig,
  phoneRule,
  stringRule,
} from '@/configs';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';
import { useCalledForm, useIdentityForm } from '@/hooks/useFormItem';

const UserInfoForm = props => {
  const calledForm = useCalledForm(props);
  // calledForm.itemProps.name = 'call'
  const identityForm = useIdentityForm(props);
  const { messages } = props;

  const uploadPdf = () => {
    console.log(' uploadPdf   ,   ： ');
  };

  const config = [
    // <UploadCom
    //   label={messages.userCenter.changeAvatar}
    //   key={'headObj'}
    //   action={'/api/uploadFile'}
    //   name={'headObj'}
    //   extra={messages.userCenter.tips}
    //   uploadProps={{
    //     disabled: props.isDisabledAll || props.action === 'detail',
    //     accept: 'image/png,image/jpeg,image/pdf,application/pdf',
    //     multiple: true,
    //     listType: null,
    //   }}
    //   formAction={props.action}
    //   noRule
    //   formItemCls={'formItems'}
    // >
    //   <Input
    //     className="uploadInput"
    //     addonAfter={<div onClick={uploadPdf}>{messages.upload}</div>}
    //     defaultValue={messages.userCenter.chooseFile}
    //   />
    // </UploadCom>,
    // {
    //   formType: 'Radio',
    //   itemProps: {
    //     label: messages.userCenter.called,
    //     name: 'called',
    //     className: 'radioFormItem',
    //   },
    //   comProps: {
    //     options: calledConfig,
    //   },
    // },
    calledForm,
    {
      itemProps: {
        label: messages.userCenter.firstName,
        name: 'firstName',
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [stringRule],
    },
    {
      itemProps: {
        label: messages.userCenter.lastName,
        name: 'secondName',
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [stringRule],
    },
    {
      itemProps: {
        label: messages.userCenter.email,
        name: 'email',
      },
      comProps: {
        className: 'formItem',
        disabled: true,
      },
      formRules: [emailRule],
    },
    {
      itemProps: {
        label: messages.userCenter.phone,
        name: 'phone',
      },
      comProps: {
        className: 'formItem',
      },
      formRules: [phoneRule],
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
        name: 'unitAddress',
      },
      comProps: {
        className: 'formItem',
      },
    },
    // {
    //   formType: 'Radio',
    //   itemProps: {
    //     label: messages.userCenter.identity,
    //     name: 'dignity',
    //     className: 'radioFormItem ant-col-24',
    //   },
    //   comProps: {
    //     options: identityConfig,
    //   },
    // },
    // identityForm,
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
