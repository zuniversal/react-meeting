import React from 'react';
import './style.less';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import PostPaperForm from './PostPaperForm';
import { meetingThemeConfig } from './config';

const DowntTpl = ({ messages }) => (
  <div className="activeLinkWrapper">
    <div className="activeLink">{messages.postPaper.downloadTpl}</div>
    <div className="activeLink">{messages.postPaper.downloadAuth}</div>
  </div>
);

const ImportantDate = ({ messages }) => {
  return (
    <div className="importantDate">
      {meetingThemeConfig.map((v, i) => (
        <div key={i} className="importantDateRow">
          <div className="dayBox">{i}</div>
          <div className="dayInfo">
            <div className="">{messages.postPaper.downloadTpl}</div>
            <div className="">{messages.postPaper.downloadTpl}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PostPaper = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' PostPaper   msg,   ： ', intl, messages);
  const { loginAsync } = useModel('users');
  console.log(' loginAsync ： ', loginAsync);
  const onSubmit = params => {
    console.log('onSubmit 提交 : ', params, props);
    // loginAsync(params);
  };

  const content = (
    <PostPaperForm name="form" onSubmit={onSubmit} messages={messages}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.postPaper.confirmPost}
        </Button>
      </Form.Item>
    </PostPaperForm>
  );

  return (
    <div className="postPaper">
      <div className="conWrapper">
        <div className="title">{messages.postPaper.post}</div>
        {/* <div className="conWrapper"> */}
        <div className="postPaperFormWrapper">
          <DowntTpl messages={messages} />
          {content}
        </div>
        {/* </div> */}
        <div className="">
          <div className="title importantDateTitle">
            {messages.postPaper.importantDate}
          </div>
          <div className="conWrapper">
            <ImportantDate messages={messages}></ImportantDate>
          </div>
        </div>
      </div>
      <div className="bottomBg"></div>
    </div>
  );
};

export default PostPaper;
