import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import UploadImgHistoryTable from './UploadImgHistoryTable';

const UploadImgHistory = props => {
  const { messages } = useIntl();
  // const {
  //   // meetingImgItem,
  //   // meetingImgList,
  //   getMeetingImgListAsync,
  // } = useModel('meetingImg');

  // useEffect(() => {
  //   getMeetingImgListAsync()
  // }, [])
  const meetingImg = useModel('meetingImg');
  console.log(' meetingImg ： ', meetingImg); //

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.uploadImgHistory.searchPh,
    },
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.uploadImgHistory.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'keyword'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <UploadImgHistoryTable messages={messages}></UploadImgHistoryTable>
        </div>
      </div>
    </div>
  );
};

export default UploadImgHistory;
