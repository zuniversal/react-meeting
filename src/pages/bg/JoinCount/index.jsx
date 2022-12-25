import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import JoinCountTable from './JoinCountTable';

const JoinCount = props => {
  const { messages } = useIntl();
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.joinCount.searchPh,
    },
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.joinCount.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'keyword'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <JoinCountTable messages={messages}></JoinCountTable>
        </div>
      </div>
    </div>
  );
};

export default JoinCount;
