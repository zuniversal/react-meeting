import React from 'react';
import './style.less';
import { history } from 'umi';
import { Button, Divider } from 'antd';

const goPage = params => {
  history.push(params);
};
const goPost = params => goPage(`/postPaper`);
const goPaperStatus = params => goPage(`/paperStatus`);
const goJoinMeeting = params => goPage(`/joinMeeting`);

const UserCenterWrapper = props => {
  const { messages, className = '' } = props;
  console.log(' UserCenterWrapper messages ： ', messages); //
  const title = props.title || messages.userCenter.title;

  return (
    <div className={`userCenterWrapper ${className}`}>
      <div className="conWrapper">
        <div className="title">
          {title}
          <div className="rawLink">{messages.userCenter.downReceipt}</div>
        </div>
        <div className="btnWrapper">
          <Button type="primary" onClick={goPost}>
            {messages.userCenter.goPost}
          </Button>
          <Button type="primary" className="blueBtn" onClick={goPaperStatus}>
            {messages.userCenter.postStatus}
          </Button>
          <Button type="primary" className="greenBtn" onClick={goJoinMeeting}>
            {messages.userCenter.joinMeeting}
          </Button>
        </div>
        <Divider className="divider" />
        {props.children}
      </div>
    </div>
  );
};

export default UserCenterWrapper;
