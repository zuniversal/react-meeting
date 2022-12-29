import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import PaperStatusTable from './PaperStatusTable';
import SmartFormModal from '@/common/SmartFormModal';
import { useModal } from '@/hooks/useModal';
import { textKeys } from './config';

const AdviseText = props => {
  return (
    <div className={`adviseTextWrapper`}>
      {textKeys.map((v, i) => (
        <div key={v}>
          <div className={`adviseText`}>
            {props.messages.paperStatus.adviseText} {i + 1}:
          </div>
          {/* {props.common.extraData.record[v]} */}
          {props.itemDetail[v]}
        </div>
      ))}
    </div>
  );
};

const CommonModal = props => {
  console.log(' CommonModal ： ', props); //
  const { messages } = props;
  const detailFormMap = {
    showAdviseText: AdviseText,
  };
  const DetailForm = detailFormMap[props.common?.action];
  const titleMap = {
    showAdviseText: messages.paperStatus.adviseText,
  };
  return (
    <SmartFormModal
      show={props.common?.isShowCommonModal}
      action={props.common?.action}
      titleMap={titleMap}
      // title={null}
      onOk={props.common.closeCommonModal}
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

const PaperStatus = props => {
  const { messages } = useIntl();
  const { getPaperListAsync, postList } = useModel('postPaper');
  useEffect(() => {
    getPaperListAsync();
  }, []);

  const { showModal, common } = useModal();

  const itemDetail = common.extraData?.record;

  const showAdviseText = params => {
    console.log(' showAdviseText   params,   ： ', params);
    showModal(params);
  };

  return (
    <UserCenterWrapper messages={messages} className="paperStatus">
      <div className="primaryTitle">{messages.paperStatus.title}</div>
      <PaperStatusTable
        messages={messages}
        dataSource={postList}
        showAdviseText={showAdviseText}
      ></PaperStatusTable>
      <CommonModal
        messages={messages}
        common={common}
        itemDetail={itemDetail}
      ></CommonModal>
    </UserCenterWrapper>
  );
};

export default PaperStatus;
