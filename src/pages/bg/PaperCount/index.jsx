import React, { useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import SmartFormModal from '@/common/SmartFormModal';
import PaperCountTable from './PaperCountTable';
import SelectDownlaodForm from './SelectDownlaodForm';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/paperCount';
import { tips } from '@/utils';
import { Button } from 'antd';
import { NORMAL_CODE } from '@/utils/request';

const CommonModal = props => {
  console.log(' CommonModal ： ', props); //
  const { messages } = props;
  const detailFormMap = {
    selectDownlaod: SelectDownlaodForm,
  };
  const DetailForm = detailFormMap[props.common?.action];
  const titleMap = {
    selectDownlaod: messages.paperCount.selectDownlaod,
  };
  return (
    <SmartFormModal
      show={props.common?.isShowCommonModal}
      action={props.common?.action}
      titleMap={titleMap}
      onOk={props.onOk}
      onCancel={props.common.closeCommonModal}
    >
      {DetailForm && <DetailForm {...props}></DetailForm>}
    </SmartFormModal>
  );
};

const PaperCount = props => {
  console.log(' PaperCount ： ', props); //
  const { action, extraData, setExtraData } = props; //
  const { paperTypeList } = useModel('systemConfig');
  const { messages } = useIntl();
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    props.getListAsync({ params: params.value.params });
  };

  const batchDown = params => {
    console.log(' batchDown ： ', params, props); //
    // if (!props.selectedInfo.selectedRowKeys.length) {
    //   tips(messages.selectDown, 2);
    //   return;
    // }
    props.showCommonModal({
      action: 'selectDownlaod',
    });
    // props.batchDownPaper({ ids: props.selectedInfo.selectedRowKeys });
  };

  const customConfig = {
    comProps: {
      placeholder: messages.paperCount.searchPh,
    },
  };

  const onOk = async params => {
    console.log(' onOk ： ', params); //
    const { form } = params;
    const res = await form.validateFields();
    console.log('  res await 结果  ：', res);
    if (props.common.action === 'selectDownlaod') {
      const reqRes = await props.batchDownPaper({
        ids: props.selectedInfo.selectedRowKeys,
        ...res,
      });
      if (reqRes.code === NORMAL_CODE) {
        props.closeCommonModal();
      }
    }
  };

  const common = {
    action: props.common.action,
    // action: 'selectDownlaod',
    isShowCommonModal: props.common.isShowCommonModal,
    // isShowCommonModal: true,
    visible: props.common.isShowCommonModal,
    closeCommonModal: props.closeCommonModal,
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.paperCount.title}
            <div className="btnWrapper">
              <SearchKwForm
                className={'fje'}
                onFieldChange={onFieldChange}
                keyword={'params'}
                label={'名称'}
                noLabel
                customConfig={customConfig}
              ></SearchKwForm>
              <Button type="primary" onClick={batchDown}>
                {messages.paperApprove.downBatch}
              </Button>
            </div>
          </div>
          <PaperCountTable
            messages={messages}
            dataSource={props.dataList}
            count={props.count}
            searchInfo={props.searchInfo}
            getListAsync={props.getListAsync}
            onSelectChange={props.onSelectChange}
          ></PaperCountTable>
        </div>
      </div>
      <CommonModal
        messages={messages}
        checkboxData={paperTypeList}
        onOk={onOk}
        // common={props.common}
        // itemDetail={itemDetail}
        // onOk={onOk}
        common={common}
      ></CommonModal>
    </div>
  );
};

// export default PaperCount;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(PaperCount),
);
