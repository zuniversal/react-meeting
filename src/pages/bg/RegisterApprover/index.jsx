import React, { useEffect, useState } from 'react';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import SmartFormModal from '@/common/SmartFormModal';
import RegisterApproverForm from './RegisterApproverForm';
import RegisterApproverTable from './RegisterApproverTable';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/registerApprover';
import { formatData } from './format';
import { Button } from 'antd';
import { NORMAL_CODE } from '@/utils/request';

const CommonModal = props => {
  console.log(' CommonModal ： ', props); //
  const { messages } = props;
  const detailFormMap = {
    newApprover: RegisterApproverForm,
    edit: RegisterApproverForm,
  };
  const DetailForm = detailFormMap[props.common?.action];
  const titleMap = {
    newApprover: messages.registerApprover.newApprover,
    edit: messages.registerApprover.editApprover,
  };
  return (
    <SmartFormModal
      show={props.common?.isShowCommonModal}
      action={props.common?.action}
      titleMap={titleMap}
      // title={null}
      onOk={props.onOk}
      onCancel={props.common.closeCommonModal}
      // modalProps={{
      //   okTxt: messages.confirm,
      //   cancelTxt: messages.cancel,
      // }}
      width={'400px'}
    >
      {DetailForm && (
        <DetailForm
          {...props}
          init={props.common?.itemDetail}
          // action={'detail'}
        ></DetailForm>
      )}
    </SmartFormModal>
  );
};

const RegisterApprover = props => {
  const { messages } = useIntl();
  const { action, extraData, setExtraData } = props;
  console.log(' props ： ', props);

  const newApprover = params => {
    console.log(' newApprover ： ', params);
    props.showCommonModal({ action: 'newApprover' });
  };

  const edit = params => {
    console.log(' edit ： ', params, props);
    props.showCommonModal(params);
    setExtraData({ record: params });
  };

  const remove = params => {
    console.log(' remove ： ', params, props);
    const res = props.onRemove({
      d_id: params.record.id,
      id: params.record.id,
      removeTitle: messages.confirmRemoveTitle,
      removeContent: messages.confirmRemove,
      okText: messages.confirm_zh,
      cancelText: messages.cancel_zh,
    });
  };

  const onOk = async params => {
    console.log(' onOk ： ', params);
    const { form } = params;
    const res = await form.validateFields();
    console.log('  res await 结果  ：', res, action, extraData);
    if (props.common.action === 'newApprover') {
      const formatRes = formatData(res);
      const reqRes = await props.addItemAsync(formatRes);
      console.log(' reqRes ： ', reqRes);
      if (reqRes.code === NORMAL_CODE) {
        props.closeCommonModal();
      }
    } else if (props.common.action === 'edit') {
      const formatRes = formatData(res);
      const reqRes = await props.editItemAsync(formatRes);
      console.log(' reqRes ： ', reqRes);
      if (reqRes.code === NORMAL_CODE) {
        props.closeCommonModal();
      }
    }
  };

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params);
    // getJoinCountListAsync(params.value);
    props.getListAsync({ params: params.value.params });
  };

  const itemDetail = {
    ...extraData.record,
  };

  const common = {
    // extraData,
    action: props.common.action,
    isShowCommonModal: props.common.isShowCommonModal,
    visible: props.common.isShowCommonModal,
    closeCommonModal: props.closeCommonModal,
    itemDetail,
  };

  const customConfig = {
    comProps: {
      placeholder: messages.registerApprover.searchPh,
    },
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.registerApprover.title}
            <div className={`df`}>
              <SearchKwForm
                className={'fje'}
                onFieldChange={onFieldChange}
                keyword={'params'}
                label={'名称'}
                noLabel
                customConfig={customConfig}
              ></SearchKwForm>
              <Button type="primary" onClick={newApprover}>
                {messages.registerApprover.newAccount}
              </Button>
            </div>
          </div>
          <RegisterApproverTable
            edit={edit}
            remove={remove}
            messages={messages}
            // dataSource={joinCountList}
            dataSource={props.dataList}
            count={props.count}
            searchInfo={props.searchInfo}
            getListAsync={props.getListAsync}
          ></RegisterApproverTable>
        </div>
      </div>
      <CommonModal
        messages={messages}
        itemDetail={itemDetail}
        onOk={onOk}
        common={common}
      ></CommonModal>
    </div>
  );
};

// export default RegisterApprover;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(RegisterApprover),
);
