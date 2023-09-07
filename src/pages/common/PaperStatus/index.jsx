import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import PaperStatusTable from './PaperStatusTable';
import SmartFormModal from '@/common/SmartFormModal';
import { useModal } from '@/hooks/useModal';
import { textKeys } from './config';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/paperStatus';
import { submitPaperCateIDMap } from '@/configs';
import { formatData } from './format';

const AdviseText = props => {
  const isOpinion = props.itemDetail.opinion;
  const adminOpinion = (
    <div className={`adviseText`}>
      <div>
        {props.messages.paperStatus.adviseText}: {props.itemDetail.opinion}
      </div>
    </div>
  );
  return isOpinion ? (
    adminOpinion
  ) : (
    <div className={`adviseTextWrapper`}>
      {textKeys
        // .filter(v => props.itemDetail[v])
        .map((v, i) => (
          <div key={v} className={`adviseText`}>
            {props.itemDetail[v] && (
              <div>
                {props.messages.paperStatus.adviseText} {i + 1}:{' '}
                {props.itemDetail[v]}
              </div>
            )}
            {/* {props.common.extraData.record[v]} */}
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
    showAdviseText: messages.paperStatus.adviseTexts,
  };
  return (
    <SmartFormModal
      show={props.common?.isShowCommonModal}
      action={props.common?.action}
      titleMap={titleMap}
      // title={null}
      onOk={props.common.closeCommonModal}
      onCancel={props.common.closeCommonModal}
      hideOk
      hideCancel
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
  console.log(
    ' %c PaperStatus 组件 props ： ',
    `color: #333; font-weight: bold`,
    props,
  ); //
  const { messages } = useIntl();
  // const { postList, getPaperListAsync, removePaperAsync } = useModel(
  //   'postPaper',
  // );
  // useEffect(() => {
  //   getPaperListAsync();
  // }, []);

  const { showModal, common } = useModal();

  const itemDetail = common.extraData?.record;

  const showAdviseText = params => {
    console.log(' showAdviseText   params,   ： ', params);
    showModal(params);
  };
  const uploadEditedPaper = async (e, record) => {
    console.log(' uploadEditedPaper   e, record,   ： ', e, record);
    const res = await props.addItemAsync(
      formatData({
        paperID: record.paperID,
        paperURLObj: e,
        submitPaperCateID: submitPaperCateIDMap[record.sumResult],
      }),
    );
  };
  const uploadEditedRevision = async (e, record) => {
    console.log(' uploadEditedRevision   e, record,   ： ', e, record);
    const res = await props.addItemAsync(
      formatData({
        paperID: record.paperID,
        paperURLObj: e,
        submitPaperCateID: submitPaperCateIDMap[record.sumResult],
      }),
    );
  };
  const remove = params => {
    console.log(' remove   params,   ： ', params);
    props.onRemove({
      d_id: params.record.id,
      id: params.record.id,
    });
    // props.getListAsync();
    // removePaperAsync({
    //   id: params.record.id,
    // });
  };

  return (
    <UserCenterWrapper messages={messages} className="paperStatus">
      <div className="fsb">
        <div className="primaryTitle">{messages.paperStatus.title}</div>
        <a
          className="activeLink"
          href="/api/downloads/paperAuth.pdf"
          download={'paperAuth.pdf'}
        >
          {messages.postPaper.downloadAuth}
        </a>
      </div>
      <PaperStatusTable
        messages={messages}
        // dataSource={postList}
        dataSource={props.dataList}
        count={props.count}
        getListAsync={props.getListAsync}
        remove={remove}
        showAdviseText={showAdviseText}
        uploadEditedPaper={uploadEditedPaper}
        uploadEditedRevision={uploadEditedRevision}
      ></PaperStatusTable>
      <CommonModal
        messages={messages}
        common={common}
        itemDetail={itemDetail}
      ></CommonModal>
    </UserCenterWrapper>
  );
};

// export default PaperStatus;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(PaperStatus),
);
