import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import PaperCountTable from './PaperCountTable';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/paperCount';

const PaperCount = props => {
  const { messages } = useIntl();
  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    props.getListAsync({ params: params.value.params });
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
              keyword={'params'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <PaperCountTable
            messages={messages}
            dataSource={props.dataList}
            count={props.count}
            searchInfo={props.searchInfo}
            getListAsync={props.getListAsync}
          ></PaperCountTable>
        </div>
      </div>
    </div>
  );
};

// export default PaperCount;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(PaperCount),
);
