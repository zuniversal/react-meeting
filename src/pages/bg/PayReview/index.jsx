import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PayReviewTable from './PayReviewTable';
import { ynConfig } from '@/configs';

const PayReview = props => {
  const { messages } = useIntl();
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const setIsPay = (params, item) => {
    console.log(' setIsPay ： ', params, item); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.payReview.searchPh,
    },
  };

  const dataSource = [
    {
      name: 'name',
      identity: 'identity',
      emailAddr: 'emailAddr',
      phone: 'phone',
      isPay: 'isPay',
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
            {messages.payReview.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'keyword'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <PayReviewTable
            setIsPay={setIsPay}
            ynConfig={ynConfig}
            messages={messages}
            dataSource={dataSource}
          ></PayReviewTable>
        </div>
      </div>
    </div>
  );
};

export default PayReview;
