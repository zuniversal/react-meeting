import React, { useState } from 'react';
import './style.less';
import { history, useIntl, useModel } from 'umi';
import { Button } from 'antd';
import UploadImgForm from './UploadImgForm';
import { formatData } from './format';
import { connect } from 'umi';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/uploadImgHistory';

const goPage = params => history.push(params);
const goUploadImgHistory = params => goPage(`/uploadImgHistory`);

const UploadImg = props => {
  console.log(
    ' %c UploadImg 组件 props ： ',
    `color: #333; font-weight: bold`,
    props,
  ); //
  const { messages } = useIntl();
  // const {
  //   meetingImgDetail,
  //   addMeetingImgAsync,
  //   editMeetingImgAsync,
  // } = useModel('meetingImg');
  // console.log(' meetingImgDetail ： ', meetingImgDetail); //

  const cancel = params => {
    console.log(' cancel   params,   ： ', params);
  };
  // const onSubmit = formProps => {
  //   console.log('onSubmit 提交 : ', formProps, props, addMeetingImgAsync);
  //   const res = formatData(formProps.values);
  //   meetingImgDetail?.id
  //     ? editMeetingImgAsync({
  //         ...res,
  //         id: meetingImgDetail.id,
  //       })
  //     : addMeetingImgAsync(res);
  //   formProps.form;
  // };
  const { meetingImgDetail } = props;
  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    const res = formatData(formProps.values);
    meetingImgDetail?.id
      ? props.editItemAsync({
          ...res,
          id: meetingImgDetail.id,
        })
      : props.addItemAsync(res);
  };
  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.uploadImg.title}
            <Button type="primary" onClick={goUploadImgHistory}>
              {messages.uploadImg.history}
            </Button>
          </div>
          <UploadImgForm
            init={meetingImgDetail}
            onSubmit={onSubmit}
            messages={messages}
          >
            <div className="btnWrapper">
              <Button size="large" onClick={cancel}>
                {messages.uploadImg.cancel}
              </Button>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="rawBtn"
              >
                {messages.uploadImg.publish}
              </Button>
            </div>
          </UploadImgForm>
        </div>
      </div>
    </div>
  );
};

// export default UploadImg;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
  })(UploadImg),
);
