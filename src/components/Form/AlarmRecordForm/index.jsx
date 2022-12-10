import React from 'react';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';
import {
  certificateTypeConfig,
  userStatusConfig,
  genderRadios,
  phoneRule,
  emailRule,
  treeList,
} from '@/configs';
import useHttp from '@/hooks/useHttp';
// import { getList as getOrganizeList } from '@/services/organize';
// import { getList as getRoleList } from '@/services/role';
// import { getList as getTagsList } from '@/services/tags';
// import { recursiveHandle } from '@/models/organize';

const AlarmRecordForm = props => {
  const config = [
    {
      itemProps: {
        label: '姓名',
        name: 'nickname',
      },
    },
    {
      noRule: props.action !== 'add',
      itemProps: {
        label: '密码',
        name: 'password',
        className: props.action !== 'add' ? 'hidden' : '',
      },
    },
    {
      noRule: true,
      itemProps: {
        label: '手机',
        name: 'phone',
      },
      formRules: [phoneRule],
    },
    {
      noRule: true,
      itemProps: {
        label: '邮箱',
        name: 'email',
      },
      formRules: [emailRule],
    },
    {
      noRule: true,
      formType: 'Search',
      // selectSearch: props.getTagsAsync,
      // selectData: props.tagsList,
      // selectData: tagsList,
      itemProps: {
        label: '职位',
        name: 'tag_ids',
      },
      comProps: {
        // mode: 'multiple',
      },
    },
    {
      noRule: true,
      formType: 'Search',
      // selectSearch: props.getRoleAsync,
      // selectData: props.roleList,
      // selectData: roleList,
      itemProps: {
        label: '角色',
        name: 'role_ids',
      },
      comProps: {
        // mode: 'multiple',
      },
    },
    {
      noRule: true,
      formType: 'TreeSelect',
      itemProps: {
        label: '所属业务部门',
        name: 'organization_ids',
      },
      comProps: {
        // treeData: props.organizeList,
        treeData: treeList,
        multiple: true,
      },
    },
    <UploadCom
      label={'上传文件'}
      key={'head_img'}
      action={'/api/v1/upload'}
      name={'head_img'}
      extra={'支持扩展名:pdf、jpg、png'}
      uploadProps={{
        disabled: props.isDisabledAll || props.action === 'detail',
        accept: 'image/png,image/jpeg,image/pdf,application/pdf',
        multiple: true,
      }}
      init={props.init}
      formAction={props.action}
      noRule
    ></UploadCom>,
  ];

  const {
    gender,
    cert,
    status,
    tag_ids = null,
    role_ids = null,
    organization_ids = [],
  } = props.init; //

  return (
    <SmartForm
      config={config}
      {...props}
      init={{
        ...props.init,
        gender: gender != undefined ? gender : 1,
        cert: cert != undefined ? `${cert}` : '1',
        status: status != undefined ? `${status}` : '1',
        tag_ids,
        role_ids,
        organization_ids,
      }}
    ></SmartForm>
  );
};

AlarmRecordForm.defaultProps = {
  init: {},
};

export default AlarmRecordForm;
