import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PaperDistributeTable from './PaperDistributeTable';

const PaperDistribute = props => {
  const { messages } = useIntl();
  const { approverList, getApproverListAsync } = useModel('paperDistribute');
  console.log(' approverList ： ', approverList); //

  useEffect(() => {
    getApproverListAsync();
  }, []);

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
            approverList={approverList}
            messages={messages}
            dataSource={dataSource}
          ></PaperDistributeTable>
        </div>
      </div>
    </div>
  );
};

export default PaperDistribute;
