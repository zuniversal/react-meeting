import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PaperDistributeTable from './PaperDistributeTable';
import SmartFormModal from '@/common/SmartFormModal';
import PaperDistributeForm from './PaperDistributeForm';
import { formatData } from './format';

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
          init={props.common?.itemDetail}
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
    paperDistributeList,
    getPaperDistributeListAsync,
    addPaperDistributeAsync,
    editPaperDistributeAsync,
    action,
    extraData,
    showModal,
    common,
  } = useModel('paperDistribute');

  useEffect(() => {
    getPaperDistributeListAsync();
  }, []);

  const itemDetail = {
    no: 'no',
    paperTitle: 'paperTitle',
    paperType: 'paperType',
    paperContacter: 'paperContacter',
    paperAuthor: 'paperAuthor',
  };

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };
  const onOk = async params => {
    console.log(' onOk ： ', params); //
    const { form } = params;
    try {
      const res = await form.validateFields();
      console.log('  res await 结果  ：', res, action);
      if (action === 'noApprove') {
        editPaperDistributeAsync(
          formatData({
            id: extraData.record.id,
            ...res,
          }),
        );
      }
    } catch (error) {
      console.log(' error ： ', error);
    }
  };
  const edit = params => {
    console.log(' edit ： ', params); //
    showModal(params);
    getPaperDistributeListAsync(params);
  };
  const getApproverList = params => {
    console.log(' getApproverList ： ', params); //
    getApproverListAsync({ paperCate: params.paperCateID });
  };
  const setApprover = (params, item) => {
    console.log(' setApprover ： ', params, item, extraData); //
    addPaperDistributeAsync({
      id: extraData.record.id,
      reviewerID: params,
      // endtime: ,
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
              keyword={'keyword'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <PaperDistributeTable
            edit={edit}
            setApprover={setApprover}
            getApproverList={getApproverList}
            approverList={approverList}
            messages={messages}
            dataSource={paperDistributeList}
          ></PaperDistributeTable>
        </div>
      </div>
      <CommonModal
        messages={messages}
        common={common}
        itemDetail={itemDetail}
        onOk={onOk}
      ></CommonModal>
    </div>
  );
};

export default PaperDistribute;
