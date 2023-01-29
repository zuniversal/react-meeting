import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import JoinCountTable from './JoinCountTable';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/joinCount';

const JoinCount = props => {
  const { messages } = useIntl();
  // const { joinCountList, getJoinCountListAsync } = useModel('admin');

  // useEffect(() => {
  //   getJoinCountListAsync();
  // }, []);

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    // getJoinCountListAsync(params.value);
    props.getListAsync({ params: params.value.params });
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
              keyword={'params'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <JoinCountTable
            messages={messages}
            // dataSource={joinCountList}
            dataSource={props.dataList}
            count={props.count}
            searchInfo={props.searchInfo}
            getListAsync={props.getListAsync}
          ></JoinCountTable>
        </div>
      </div>
    </div>
  );
};

// export default JoinCount;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(JoinCount),
);
