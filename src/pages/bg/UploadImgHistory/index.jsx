import React, { useEffect, useState } from 'react';
import './style.less';
import { history, useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import UploadImgHistoryTable from './UploadImgHistoryTable';
import moment from 'moment';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/uploadImgHistory';

const UploadImgHistory = props => {
  console.log(
    ' %c UploadImgHistory 组件 props ： ',
    `color: #333; font-weight: bold`,
    props,
  ); //
  const { messages } = useIntl();
  // const {
  //   meetingImgItem,
  //   meetingImgList,
  //   getMeetingImgListAsync,
  //   removeMeetingImgAsync,
  //   meetingImgDetail,
  //   setMeetingImgDetail,
  // } = useModel('meetingImg');

  // useEffect(() => {
  //   getMeetingImgListAsync();
  // }, []);

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
    props.getListAsync({ params: params.value.params });
  };

  const customConfig = {
    comProps: {
      placeholder: messages.uploadImgHistory.searchPh,
    },
  };

  const edit = params => {
    console.log(' edit   params,   ： ', params, props);
    props.setMeetingImgDetail({
      ...params.record,
      time: moment(params.record.time),
    });
    history.push('/uploadImg');
  };

  const remove = params => {
    console.log(' remove   params,   ： ', params);
    // removeMeetingImgAsync({
    //   id: params.record.id,
    // });
  };

  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.uploadImgHistory.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'params'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <UploadImgHistoryTable
            messages={messages}
            // dataSource={meetingImgList}
            dataSource={props.dataList}
            count={props.count}
            getListAsync={props.getListAsync}
            edit={edit}
            remove={remove}
          ></UploadImgHistoryTable>
        </div>
      </div>
    </div>
  );
};

// export default UploadImgHistory;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(UploadImgHistory),
);
