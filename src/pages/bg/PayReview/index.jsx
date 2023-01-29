import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PayReviewTable from './PayReviewTable';
import { ynConfig } from '@/configs';
import { formatData } from './format';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/payReview';

const PayReview = props => {
  const { messages } = useIntl();
  // const { payReviewList, getPayReviewListAsync, editPayReviewAsync } = useModel(
  //   'payReview',
  // );
  // console.log('  payReviewList ： ', payReviewList); //

  // useEffect(() => {
  //   getPayReviewListAsync();
  // }, []);

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    props.getListAsync({ params: params.value.params });
  };

  const uploadReceipt = (e, record) => {
    console.log(' uploadReceipt ： ', e, record); //
    // editPayReviewAsync(
    props.editItemAsync(
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

  const alertPay = (params, item) => {
    console.log(' alertPay ： ', params, item); //
    props.editItemAsync({
      email: params.email,
      // email: '604688489@qq.com',
      // email: 'zhousc5300@163.com',
      warmPay: 1,
    });
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
              keyword={'params'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <PayReviewTable
            messages={messages}
            // dataSource={payReviewList}
            dataSource={props.dataList}
            count={props.count}
            searchInfo={props.searchInfo}
            getListAsync={props.getListAsync}
            uploadReceipt={uploadReceipt}
            ynConfig={ynConfig}
            alertPay={alertPay}
          ></PayReviewTable>
        </div>
      </div>
    </div>
  );
};

// export default PayReview;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(PayReview),
);
