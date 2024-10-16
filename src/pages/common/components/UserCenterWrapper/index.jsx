import React from 'react';
import './style.less';
import { history, useModel } from 'umi';
import { Button, Divider } from 'antd';
import { DOWNLOADS_URL } from '@/constants';
import cls from 'classnames';
import Download from '@/components/Widgets/Download';
import { noUserActionRole } from '@/configs';
import SiteFooter from '@/components/Widgets/SiteFooter';

const UserCenterWrapper = props => {
  const { activeKey, setActiveKey } = useModel('systemConfig');
  const { userInfo } = useModel('users');
  console.log(' userInfo ： ', userInfo); //
  const goPage = params => {
    setActiveKey(params);
    history.push(params);
  };
  const goPost = params => goPage(`/postPaper`);
  const goPaperStatus = params => goPage(`/paperStatus`);
  const goJoinMeeting = params => goPage(`/joinMeeting`);

  const { messages, className, data } = props;
  const title = props.title || messages.userCenter.title;
  const href = DOWNLOADS_URL + data.payPhotographUrl;
  const linkAttr = data.payPhotographUrl
    ? {
        href: href,
        download: data.payPhotographUrl,
      }
    : {};

  return (
    <>
      <div className={`userCenterWrapper ${className}`}>
        <div className="conWrapper">
          <div className="title">
            <div className="">
              {title}
              <a
                className="ant-btn ant-btn-primary downloadBtn bigBtn"
                href="/api/downloads/PROCEEDINGS-OF-STAB-S2024-final.pdf"
                download={'PROCEEDINGS-OF-STAB-S2024-final.pdf'}
              >
                {messages.userCenter.downProceedings}
              </a>
              {/* <a className="rawLink" {...linkAttr}>
            {messages.userCenter.downReceipt}
          </a> */}
            </div>
          </div>
          {!userInfo.isAdminApprover && (
            <div className="btnWrapper">
              <Button type="primary" className="bigBtn" onClick={goPost}>
                {messages.userCenter.goPost}
              </Button>
              <Button
                type="primary"
                className={cls({
                  active: activeKey === '/paperStatus',
                  'blueBtn bigBtn': true,
                })}
                onClick={goPaperStatus}
              >
                {messages.userCenter.postStatus}
              </Button>
              <Button
                type="primary"
                className={cls({
                  active: activeKey === '/joinMeeting',
                  'greenBtn bigBtn': true,
                })}
                onClick={goJoinMeeting}
              >
                {messages.userCenter.joinMeeting}
              </Button>
            </div>
          )}
          <Divider className="divider" />
          {props.children}
        </div>
      </div>
      <SiteFooter></SiteFooter>
    </>
  );
};

UserCenterWrapper.defaultProps = {
  messages: {},
  className: '',
  data: {},
};

export default UserCenterWrapper;
