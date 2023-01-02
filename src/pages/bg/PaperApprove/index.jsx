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
          init={props.common?.itemDetail}
          // action={'detail'}
        ></DetailForm>
      )}
    </SmartFormModal>
  );
};

const PaperApprove = props => {
  const { messages } = useIntl();
  const { postList, getPaperListAsync } = useModel('paperApprove');

  useEffect(() => {
    getPaperListAsync();
  }, []);

  const downBatch = params => {
    console.log(' downBatch ： ', params); //
  };
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const itemDetail = {
    no: 'no',
    paperTitle: 'paperTitle',
    paperType: 'paperType',
    paperContacter: 'paperContacter',
    paperAuthor: 'paperAuthor',
  };

  const customConfig = {
    comProps: {
      placeholder: messages.paperApprove.searchPh,
    },
  };

  const {
    isShowCommonModal,
    setIsShowCommonModal,
    action,
    setAction,
    showModal,
    common,
  } = useModal();

  const edit = params => {
    console.log(' edit ： ', params); //
    showModal(params);
  };

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
                keyword={'keyword'}
                label={'名称'}
                noLabel
                customConfig={customConfig}
              ></SearchKwForm>
              <Button type="primary" onClick={downBatch}>
                {messages.paperApprove.downBatch}
              </Button>
            </div>
          </div>
          <PaperApproveTable
            edit={edit}
            messages={messages}
            dataSource={postList}
          ></PaperApproveTable>
        </div>
      </div>
      <CommonModal
        messages={messages}
        common={common}
        itemDetail={itemDetail}
      ></CommonModal>
    </div>
  );
};

export default PaperApprove;
