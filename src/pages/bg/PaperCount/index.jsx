import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PaperCountTable from './PaperCountTable';

const PaperCount = props => {
  const { messages } = useIntl();
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.paperCount.searchPh,
    },
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.paperCount.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'keyword'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <PaperCountTable messages={messages}></PaperCountTable>
        </div>
      </div>
    </div>
  );
};

export default PaperCount;
