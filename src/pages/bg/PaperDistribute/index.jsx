import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PaperDistributeTable from './PaperDistributeTable';

const PaperDistribute = props => {
  const { messages } = useIntl();
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const setApprover = (params, item) => {
    console.log(' setApprover ： ', params, item); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.paperDistribute.searchPh,
    },
  };

  const dataSource = [
    {
      no: 'no',
      paperTitle: 'paperTitle',
      approveStatus: 'approveStatus',
      paperType: 'paperType',
      contactAuthor: 'contactAuthor',
      commonAuthor: 'commonAuthor',
      approver: 'approver',
      uploadTime: 'uploadTime',
    },
  ];
  const approveList = [
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
  ];

  return (
    <div className="adminBg">
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
            setApprover={setApprover}
            approveList={approveList}
            messages={messages}
            dataSource={dataSource}
          ></PaperDistributeTable>
        </div>
      </div>
    </div>
  );
};

export default PaperDistribute;
