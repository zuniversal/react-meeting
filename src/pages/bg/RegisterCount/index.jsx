import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import RegisterCountTable from './RegisterCountTable';

const RegisterCount = props => {
  const { messages } = useIntl();
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.registerCount.searchPh,
    },
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.registerCount.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'keyword'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <RegisterCountTable messages={messages}></RegisterCountTable>
        </div>
      </div>
    </div>
  );
};

export default RegisterCount;
