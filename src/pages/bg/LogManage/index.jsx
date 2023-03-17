import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import LogManageSearchForm from './LogManageSearchForm';
import LogManageTable from './LogManageTable';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/logManage';
import { formatSearchData } from './format';

const LogManage = props => {
  const { messages } = useIntl();
  // const { joinCountList, getJoinCountListAsync } = useModel('admin');

  // useEffect(() => {
  //   getJoinCountListAsync();
  // }, []);

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    // getJoinCountListAsync(params.value);
    const formatRes = formatSearchData(params.formData);
    props.getListAsync(formatRes);
  };

  const customConfig = {
    comProps: {
      placeholder: messages.logManage.searchPh,
    },
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.logManage.title}
            {/* <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'params'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm> */}
          </div>
          <LogManageSearchForm
            messages={messages}
            onFieldChange={onFieldChange}
          ></LogManageSearchForm>
          <LogManageTable
            messages={messages}
            // dataSource={joinCountList}
            dataSource={props.dataList}
            count={props.count}
            searchInfo={props.searchInfo}
            getListAsync={props.getListAsync}
          ></LogManageTable>
        </div>
      </div>
    </div>
  );
};

// export default LogManage;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(LogManage),
);
