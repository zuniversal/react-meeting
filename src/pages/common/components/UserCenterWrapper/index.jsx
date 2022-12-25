import React from 'react';
import './style.less';
import { history } from 'umi';
import { Button, Divider } from 'antd';
import { DOWNLOAD_URL } from '@/constants';

const goPage = params => history.push(params);
const goPost = params => goPage(`/postPaper`);
const goPaperStatus = params => goPage(`/paperStatus`);
const goJoinMeeting = params => goPage(`/joinMeeting`);

const UserCenterWrapper = props => {
  const { messages, className, data } = props;
  console.log(' UserCenterWrapper messages ： ', messages); //
  const title = props.title || messages.userCenter.title;
  const href = DOWNLOAD_URL + data.payPhotographUrl;
  const linkAttr = data.payPhotographUrl
    ? {
        href: href,
        download: data.payPhotographUrl,
      }
    : {};

  return (
    <div className={`userCenterWrapper ${className}`}>
      <div className="conWrapper">
        <div className="title">
          {title}
          <a className="rawLink" {...linkAttr}>
            {messages.userCenter.downReceipt}
          </a>
        </div>
        <div className="btnWrapper">
          <Button type="primary" className="bigBtn" onClick={goPost}>
            {messages.userCenter.goPost}
          </Button>
          <Button
            type="primary"
            className="blueBtn bigBtn"
            onClick={goPaperStatus}
          >
            {messages.userCenter.postStatus}
          </Button>
          <Button
            type="primary"
            className="greenBtn bigBtn"
            onClick={goJoinMeeting}
          >
            {messages.userCenter.joinMeeting}
          </Button>
        </div>
        <Divider className="divider" />
        {props.children}
      </div>
    </div>
  );
};

UserCenterWrapper.defaultProps = {
  messages: {},
  className: '',
  data: {},
};

export default UserCenterWrapper;
