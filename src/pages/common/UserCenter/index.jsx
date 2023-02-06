import React, { useState, useEffect } from 'react';
import './style.less';
import { useIntl, useModel, history } from 'umi';
import { Button, Form } from 'antd';
import { userInfoConfig } from './config';
import InfoCol from '@/pages/common/components/InfoCol';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import UserInfoForm from './UserInfoForm';
import { useSystemConfig } from '@/hooks/useSystemConfig';
import { formatData } from './format';

const UserCenter = props => {
  const { messages } = useIntl();
  const { editUserInfoAsync, userInfo, getUserInfoAsync } = useModel('users');
  const { calledListMap, identityListMap } = useSystemConfig();
  const userInfoMap = {
    ...userInfo,
  };
  console.log(' userInfo ： ', userInfo); //
  // const [ isEdit, setIsEdit ] = useState(true)
  const [isEdit, setIsEdit] = useState(false);

  const goPage = params => history.push(params);
  const goChangePwd = params => goPage(`/changePwd`);

  useEffect(() => {
    console.log(' getUserInfoAsync ： '); //
    getUserInfoAsync();
  }, []);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const onSubmit = async formProps => {
    console.log('onSubmit 提交 : ', 8, props);
    const { country, ...rest } = formProps.values;
    const { email, ...restParams } = {
      ...userInfo,
      ...rest,
    };
    const res = await editUserInfoAsync(formatData(restParams));
    setIsEdit(!isEdit);
  };

  const userInfoDetail = (
    <div className="userInfoWrapper">
      <div className="userInfoRow">
        <span className="primaryTitle">{messages.userCenter.userInfo}</span>
        {/* <Button type="primary" ghost onClick={goUserInfo}> */}
        <div className="actionBtnWrapper">
          <Button
            type="primary"
            className="bigBtn"
            ghost
            onClick={toggleIsEdit}
          >
            {messages.userCenter.edit}
          </Button>
          {!userInfo.isAdminApprover && (
            <Button
              type="primary"
              className="bigBtn"
              ghost
              onClick={goChangePwd}
            >
              {messages.userCenter.changePwd}
            </Button>
          )}
        </div>
      </div>
      <div className="userInfo">
        {/* <UserInfo messages={messages}></UserInfo> */}
        {/* <div className="avatar"></div> */}
        {/* <img src={userInfo.headMap} className="avatar" /> */}
        <InfoCol
          data={userInfoMap}
          messages={messages}
          msgKey={'userCenter'}
          config={userInfoConfig}
        ></InfoCol>
      </div>
    </div>
  );

  const userInfoForm = (
    <div className="">
      <div className="primaryTitle">{messages.userCenter.editInfo}</div>
      <UserInfoForm messages={messages} onSubmit={onSubmit} init={userInfo}>
        <Form.Item className={`btnFormItem`} noStyle>
          <Button type="primary" className="bigBtn" htmlType="submit">
            {messages.confirm}
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
