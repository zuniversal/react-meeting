import React, { useState } from 'react';
import './style.less';
import { history, useIntl, useModel } from 'umi';
import { Button } from 'antd';
import UploadImgForm from './UploadImgForm';
import { formatData } from './format';

const goPage = params => history.push(params);
const goUploadImgHistory = params => goPage(`/uploadImgHistory`);

const UploadImg = props => {
  const { messages } = useIntl();
  const {
    meetingImgDetail,
    addMeetingImgAsync,
    editMeetingImgAsync,
  } = useModel('meetingImg');
  console.log(' meetingImgDetail ： ', meetingImgDetail); //

  const cancel = params => {
    console.log(' cancel   params,   ： ', params);
  };
  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    const res = formatData(formProps.values);
    meetingImgDetail.id
      ? editMeetingImgAsync({
          ...res,
          id: meetingImgDetail.id,
        })
      : addMeetingImgAsync(res);
    formProps.form;
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
                {messages.cancel}
              </Button>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="rawBtn"
              >
                {messages.publish}
              </Button>
            </div>
          </UploadImgForm>
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
