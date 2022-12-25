import React, { useState } from 'react';
import './style.less';
import { history, useIntl } from 'umi';
import { Button } from 'antd';
import UploadImgForm from './UploadImgForm';

const goPage = params => history.push(params);
const goUploadImgHistory = params => goPage(`/uploadImgHistory`);

const UploadImg = props => {
  const { messages } = useIntl();
  const cancel = params => {
    console.log(' cancel   params,   ： ', params);
  };
  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    // const res = formatData({
    //   ...formProps.values,
    //   firstName: '',
    //   secondName: '',
    //   // paperURL: '/paperURL',
    //   // copyrightFileURL: '/copyrightFileURL',
    // })
    // const res2 = {
    //   commonAuthor: "论文共同作者",
    //   company: "单位名称",
    //   contactAuthor: "论文通讯作者",
    //   copyrightFileURL: "0ea005ef712f227010e10332a6208626fb056691.pdf",
    //   file: null,
    //   firstName: "",
    //   paperURL: "d210dd9779f6d56ed54f5748a68f21be37b34176.doc",
    //   secondName: "",
    //   submitPaperCateID: 2,
    //   title: "论文标题",
    // }
    // console.log('  res2 ：', res2,  )//
    // // addPostAsync(res2);
    // addPostAsync(res);
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
          <UploadImgForm onSubmit={onSubmit} messages={messages}>
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
