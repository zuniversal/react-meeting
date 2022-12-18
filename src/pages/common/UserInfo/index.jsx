import React from 'react';
// import './style.less';
import { useIntl } from 'umi';
import { Button } from 'antd';
import { userInfoConfig } from './config';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import UserInfoForm from './UserInfoForm';

const goPage = params => history.push(params);
const goUserInfo = params => goPage(`/userInfo`);

// const UserInfo = ({ messages }) => {
//   return (
//     <div className="userInfo">
//       <div className="avatar"></div>
//       {userInfoConfig.map(v => (
//         <div key={v.key} className="userInfoRow">
//           <div className="label">{messages.userCenter[v.langKey]}</div>
//           <div className="val">{messages.userCenter[v.langKey]}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const UserCenter2 = props => {
//   const { messages } = useIntl();
//   const goPage = params => {
//     history.push(params);
//   };
//   const goPost = params => goPage(`/postPaper`);
//   const goPostStatus = params => goPage(`/postStatus`);
//   const goJoinMeeting = params => goPage(`/joinMeeting`);

//   return (
//     <div className="userCenter">
//       <div className="conWrapper">
//         {/* <div className="title">
//         {messages.userCenter.title}
//         <div className="rawLink">{messages.userCenter.downReceipt}</div>
//       </div>
//       <div className="btnWrapper">
//         <Button type="primary" onClick={goPost}>
//           {messages.userCenter.goPost}
//         </Button>
//         <Button type="primary" className='blueBtn' onClick={goPostStatus}>
//           {messages.userCenter.postStatus}
//         </Button>
//         <Button type="primary" className='greenBtn' onClick={goJoinMeeting}>
//           {messages.userCenter.joinMeeting}
//         </Button>
//       </div> */}
//         <div className="userInfoWrapper">
//           <span className="userInfoTitle">{messages.userCenter.userInfo}</span>
//           <UserInfo messages={messages}></UserInfo>
//           <Button type="primary" ghost onClick={goPost}>
//             {messages.userCenter.edit}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

const UserCenter = props => {
  const { messages } = useIntl();
  console.log(' messages ： ', messages); //

  // const isEdit = true
  const isEdit = false;

  return (
    <UserCenterWrapper messages={messages}>
      {isEdit ? (
        <UserInfoForm messages={messages}></UserInfoForm>
      ) : (
        <div className="userInfo">
          <div className="avatar"></div>
          {userInfoConfig.map(v => (
            <div key={v.key} className="userInfoRow">
              <div className="label">{messages.userCenter[v.langKey]}</div>
              <div className="val">{messages.userCenter[v.langKey]}</div>
            </div>
          ))}
        </div>
      )}
    </UserCenterWrapper>
  );
};

export default UserCenter;
