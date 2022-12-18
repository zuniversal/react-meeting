import React, { useState } from 'react';
import './style.less';
import { useIntl, history } from 'umi';
import { Button, Form } from 'antd';
import { userInfoConfig } from './config';
import InfoCol from '@/pages/common/components/InfoCol';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import UserInfoForm from './UserInfoForm';

const goPage = params => history.push(params);
const goPost = params => goPage(`/postPaper`);
const goPostStatus = params => goPage(`/postStatus`);
const goJoinMeeting = params => goPage(`/joinMeeting`);
const goUserInfo = params => goPage(`/userInfo`);

const UserInfo = ({ messages }) => {
  return (
    <div className="userInfo">
      <div className="avatar"></div>
      {userInfoConfig.map(v => (
        <div key={v.key} className="userInfoRow">
          <div className="label">{messages.userCenter[v.langKey]}</div>
          <div className="val">{messages.userCenter[v.langKey]}</div>
        </div>
      ))}
    </div>
  );
};

const UserCenter = props => {
  const { messages } = useIntl();

  // const [ isEdit, setIsEdit ] = useState(true)
  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  // // const isEdit = true
  // const isEdit = false

  const userInfoDetail = (
    <div className="userInfoWrapper">
      <span className="primaryTitle">{messages.userCenter.userInfo}</span>
      {/* <UserInfo messages={messages}></UserInfo> */}
      <InfoCol
        messages={messages}
        msgKey={'userCenter'}
        config={userInfoConfig}
      ></InfoCol>
      {/* <Button type="primary" ghost onClick={goUserInfo}> */}
      <Button type="primary" ghost onClick={toggleIsEdit}>
        {messages.userCenter.edit}
      </Button>
    </div>
  );

  const userInfoForm = (
    <div className="">
      <div className="primaryTitle">{messages.userCenter.editInfo}</div>
      <UserInfoForm messages={messages}>
        <Form.Item className={`btnFormItem`} noStyle>
          <Button type="primary" htmlType="submit">
            {messages.confirmEdit}
          </Button>
        </Form.Item>
      </UserInfoForm>
    </div>
  );

  return (
    <UserCenterWrapper messages={messages}>
      {isEdit ? userInfoForm : userInfoDetail}
    </UserCenterWrapper>
  );
};

export default UserCenter;
