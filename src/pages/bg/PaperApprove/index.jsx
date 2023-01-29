import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import SmartFormModal from '@/common/SmartFormModal';
import PaperApproveTable from './PaperApproveTable';
import PaperApproveForm from './PaperApproveForm';
import { approveConfig } from './config';
import { useModal } from '@/hooks/useModal';
import { Button } from 'antd';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/paperApprove';
import { formatData } from './format';
import { paperTypeConfigMap } from '@/configs';
import { NORMAL_CODE } from '@/utils/request';
import { tips } from '@/utils';

const CommonModal = props => {
  console.log(' CommonModal ： ', props); //
  const { messages } = props;
  const ApproveForm = () => <div>{messages.paperApprove.approve}</div>;
  const detailFormMap = {
    approve: PaperApproveForm,
  };
  const DetailForm = detailFormMap[props.common?.action];
  const titleMap = {
    approve: messages.paperApprove.approve,
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

const PaperApprove = props => {
  const { messages } = useIntl();
  const { action, extraData, setExtraData } = props; //
  console.log(' PaperApprove ： ', props, extraData); //
  // const { postList, getPaperListAsync } = useModel('paperApprove');

  // useEffect(() => {
  //   getPaperListAsync();
  // }, []);

  const batchDown = params => {
    console.log(' batchDown ： ', params, props); //
    if (!props.selectedInfo.selectedRowKeys.length) {
      tips(messages.selectDown, 2);
      return;
    }
    props.batchDownPaper({ ids: props.selectedInfo.selectedRowKeys });
  };
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    props.getListAsync({ params: params.value.params });
  };

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

  const customConfig = {
    comProps: {
      placeholder: messages.paperApprove.searchPh,
    },
  };

  // const {
  //   isShowCommonModal,
  //   setIsShowCommonModal,
  //   action,
  //   setAction,
  //   showModal,
  //   common,
  // } = useModal();

  const edit = params => {
    console.log(' edit ： ', params, props); //
    // showModal(params);
    // props.showFormModal(params);
    props.showCommonModal(params);
    setExtraData({ record: params });
  };

  const onOk = async params => {
    console.log(' onOk ： ', params); //
    const { form } = params;
    const res = await form.validateFields();
    console.log('  res await 结果  ：', res, action, extraData);
    if (extraData.action === 'approve') {
      const datas = {
        id: extraData.record.id,
        ...res,
      };
      console.log('  datas ：', datas); //
      const reqRes = await props.paperApproverAsync(formatData(datas));
      if (reqRes.code === NORMAL_CODE) {
        props.closeCommonModal();
      }
    }
  };

  // setTimeout(() => {
  //   console.log('  延时器 ： ',  )
  //   props.paperApproverAsync(
  //     formatData({
  //       id: 1,
  //       opinionText: 'opinionText',
  //       opinionURL: 'opinionURL',
  //       result: '通过',
  //     }),
  //   );
  // }, 5000)

  // const common = {
  //   // extraData,
  //   action: props.action,
  //   isShowCommonModal: props.isShowModal,
  //   visible: props.isShowModal,
  //   closeCommonModal: props.onCancel,
  //   itemDetail,
  //   onOk,
  // };

  return (
    <div className="adminBg paperApprove">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.paperApprove.title}
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
          <PaperApproveTable
            edit={edit}
            messages={messages}
            // dataSource={postList}
            dataSource={props.dataList}
            count={props.count}
            getListAsync={props.getListAsync}
            onSelectChange={props.onSelectChange}
          ></PaperApproveTable>
        </div>
      </div>
      <CommonModal
        messages={messages}
        itemDetail={itemDetail}
        onOk={onOk}
        // common={props.common}
        // itemDetail={itemDetail}
        // onOk={onOk}
        common={common}
      ></CommonModal>
    </div>
  );
};

// export default PaperApprove;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
    // noMountFetch: true,
  })(PaperApprove),
);
