import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PayReviewTable from './PayReviewTable';
import { ynConfig } from '@/configs';
import { formatData } from './format';

const PayReview = props => {
  const { messages } = useIntl();
  const { payReviewList, getPayReviewListAsync, editPayReviewAsync } = useModel(
    'payReview',
  );
  console.log('  payReviewList ： ', payReviewList); //

  useEffect(() => {
    getPayReviewListAsync();
  }, []);

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const uploadReceipt = (e, record) => {
    console.log(' uploadReceipt ： ', e, record); //
    editPayReviewAsync(
      formatData({
        email: record.email,
        payPhotographUrl: e,
        isPay: 1,
      }),
    );
  };

  const setIsPay = (params, item) => {
    console.log(' setIsPay ： ', params, item); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.payReview.searchPh,
    },
  };

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
            uploadReceipt={uploadReceipt}
            ynConfig={ynConfig}
            messages={messages}
            dataSource={payReviewList}
          ></PayReviewTable>
        </div>
      </div>
    </div>
  );
};

export default PayReview;
