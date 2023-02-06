import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PaperDistributeTable from './PaperDistributeTable';
import SmartFormModal from '@/common/SmartFormModal';
import PaperDistributeForm from './PaperDistributeForm';
import { formatData } from './format';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/paperDistribute';
import { paperTypeConfigMap } from '@/configs';
import { NORMAL_CODE } from '@/utils/request';

const CommonModal = props => {
  console.log(' CommonModal ： ', props); //
  const { messages } = props;
  const ApproveForm = () => <div>{messages.paperDistribute.approve}</div>;
  const detailFormMap = {
    noApprove: PaperDistributeForm,
  };
  const DetailForm = detailFormMap[props.common?.action];
  const titleMap = {
    noApprove: messages.paperDistribute.noApprove,
  };
  return (
    <SmartFormModal
      show={props.common?.isShowCommonModal}
      action={props.common?.action}
      titleMap={titleMap}
      // title={null}
      onOk={props.onOk}
      onCancel={props.common.closeCommonModal}
    >
      {DetailForm && (
        <DetailForm
          {...props}
          // init={props.common?.itemDetail}
          // action={'detail'}
        ></DetailForm>
      )}
    </SmartFormModal>
  );
};

const PaperDistribute = props => {
  const { messages } = useIntl();
  const {
    approverList,
    getApproverListAsync,
    action,
    extraData,
    setExtraData,
  } = props; //
  // const {
  //   approverList,
  //   getApproverListAsync,
  //   paperDistributeList,
  //   getPaperDistributeListAsync,
  //   addPaperDistributeAsync,
  //   editPaperDistributeAsync,
  //   action,
  //   extraData,
  //   setExtraData,
  //   showModal,
  //   common,
  // } = useModel('paperDistribute');

  // useEffect(() => {
  //   getPaperDistributeListAsync();
  // }, []);

  // const itemDetail = {
  //   no: 'no',
  //   paperTitle: 'paperTitle',
  //   paperType: 'paperType',
  //   paperContacter: 'paperContacter',
  //   paperAuthor: 'paperAuthor',
  // };
  const itemDetail = {
    ...extraData.record,
    paperIDMap: paperTypeConfigMap[extraData.record?.paperID],
  };

  const common = {
    // extraData,
    action: props.common.action,
    isShowCommonModal: props.common.isShowCommonModal,
    visible: props.common.isShowCommonModal,
    closeCommonModal: props.closeCommonModal,
    itemDetail,
  };

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    props.getListAsync({ params: params.value.params });
  };
  const onOk = async params => {
    console.log(' onOk ： ', params); //
    const { form } = params;
    const res = await form.validateFields();
    console.log('  res await 结果  ：', res, action, extraData);
    if (extraData.action === 'noApprove') {
      const reqRes = await props.editPaperDistributeAsync({
        id: extraData.record.id,
        ...res,
      });
      if (reqRes.code === NORMAL_CODE) {
        props.closeCommonModal();
      }
    }
  };
  const edit = params => {
    console.log(' edit ： ', params); //
    // showModal(params);
    // props.getPaperDistributeListAsync(params);
    // props.showItemAsync(params);
    // props.getListAsync();
    props.showCommonModal(params);
    setExtraData({ record: params });
  };
  const getApproverList = params => {
    console.log(' getApproverList ： ', params); //
    // getApproverListAsync({ paperCate: params.paperCateID });
    setExtraData({ record: params });
  };
  useEffect(() => {
    getApproverListAsync();
  }, []);
  const setApprover = (params, item) => {
    console.log(' setApprover ： ', params, item, extraData); //
    // addPaperDistributeAsync({
    props.addItemAsync({
      // id: extraData.record.id,
      id: extraData.id,
      reviewerID: params,
      endtime: '2030-12-30 14:26:50',
    });
  };

  const customConfig = {
    comProps: {
      placeholder: messages.paperDistribute.searchPh,
    },
  };

  return (
    <div className="adminBg paperDistribute">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.paperDistribute.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'params'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <PaperDistributeTable
            messages={messages}
            // dataSource={paperDistributeList}
            dataSource={props.dataList}
            count={props.count}
            searchInfo={props.searchInfo}
            getListAsync={props.getListAsync}
            edit={edit}
            setApprover={setApprover}
            getApproverList={getApproverList}
            approverList={approverList}
          ></PaperDistributeTable>
        </div>
      </div>
      {/* <CommonModal
        messages={messages}
        common={common}
        itemDetail={itemDetail}
        onOk={onOk}
      ></CommonModal> */}
      <CommonModal
        messages={messages}
        // common={props.common}
        common={common}
        itemDetail={itemDetail}
        onOk={onOk}
      ></CommonModal>
    </div>
  );
};

// export default PaperDistribute;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(PaperDistribute),
);
