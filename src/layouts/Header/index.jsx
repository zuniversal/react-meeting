import React from 'react';
import './style.less';
import { connect, history, useIntl, useModel } from 'umi';
import { Tabs, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from '@/static/img/logo.png';
import platformLogo from '@/static/img/platformLogo.png';
import { removeItems } from '@/utils';
const { TabPane } = Tabs;

const tabConfigs = [
  {
    tab: '首页',
    label: 'Home',
    key: '/home',
  },
  {
    tab: '大美无锡',
    label: 'Beautiful Wuxi',
    key: '/beauty',
  },
  {
    tab: '论文投稿',
    label: 'Paper Submission',
    key: '/postPaper',
  },
  {
    tab: '委员会/组委会',
    label: 'Committee',
    key: '/committee',
  },
  // {
  //   tab: '活动安排',
  //   label: 'Events arrangement',
  //   key: '/activity',
  // },
  {
    tab: '过往会议',
    label: 'Precious Conferences',
    key: '/oldMeetings',
  },
  // {
  //   tab: '大会展示',
  //   label: 'Conference Review',
  //   key: '/exhibition',
  // },
  {
    tab: '联系我们',
    label: 'ContactUs',
    key: '/contactUs',
  },
];

const activeKey = window.location.hash.split('#')[1];
console.log(' activeKey ： ', activeKey); //

// const mapStateToProps = ({tab}) => tab;
// export default connect(mapStateToProps, dispatch => {
//   return {
//     setActiveKey: () => {
//       dispatch({ type: 'tab/setActiveKey' });
//     },
//   };
// })(TabsCom);

const TabsCom = props => {
  // console.log(' TabsCom props ： ', props,  )//
  const onChange = key => {
    console.log(key);
    history.push(key);
    // props.setActiveKey({
    //   activeKey: key,
    // })
  };
  return (
    <Tabs
      defaultActiveKey={props.activeKey}
      onChange={onChange}
      items={tabConfigs}
    >
      {/* {tabConfigs.map((v, i) => (
        <TabPane {...v}></TabPane>
      ))} */}
    </Tabs>
  );
};

// const TabsComWrapper = connect(mapStateToProps, mapDispatchToProps)(TabsCom);

const HeaderAction = props => (
  <div className="btnWrapper">
    <div className="" onClick={() => props.goPage(`/login`)}>
      {props.messages.logan}
    </div>
    <div className="linking" onClick={() => props.goPage(`/register`)}>
      {props.messages.reg}
    </div>
    {/* <Button size="small" ghost onClick={() => props.goPage(`/login`)}>
      登录
    </Button>
    <Button
      size="small"
      type="primary"
      onClick={() => props.goPage(`/register`)}
    >
      注册
    </Button> */}
    {/* <Button size='small' type="primary" onClick={() => history.push(`/admin`)}>后台入口</Button> */}
  </div>
);

const UserInfo = props => {
  const goPage = params => {
    history.push(params);
  };
  const goUserCenter = params => goPage(`/userCenter`);
  return (
    <div className="userInfo">
      <img
        src={props.userInfo.avatar}
        className="avatar"
        onClick={goUserCenter}
      />
      {/* <div className="userName">{props.userInfo.firstName + props.userInfo.secondName}</div> */}
      <div className="userName" onClick={goUserCenter}>
        {props.userInfo.email}
      </div>
      <div className="underline" onClick={props.logout}>
        {props.messages.logout}
      </div>
    </div>
  );
};

const Header = props => {
  const { messages } = useIntl();
  const { userInfo, logout } = useModel('users');
  // console.log(' Header ： ', props, messages, userInfo); //

  const goPage = params => {
    history.push(params);
    // props.setActiveKey({
    //   activeKey: params,
    // })
  };

  const info = {
    avatar: '',
    name: 'zyb',
  };

  return (
    <div className="header">
      <div className="headerWarpper">
        <div className="headerLeft">
          {/* <div className="systemTitle">{props.systemTitle}</div> */}
          <div className="logoWarpper">
            <img src={logo} className="logo" onClick={() => goPage(`/home`)} />
          </div>
          {/* <TabsComWrapper></TabsComWrapper> */}
          {/* {props.isShowTabs && <TabsCom {...props}></TabsCom>} */}
          <TabsCom activeKey={activeKey} {...props}></TabsCom>
        </div>
        {/* {props.isShowTabs && <HeaderAction goPage={goPage}></HeaderAction>} */}

        <div className="headerRight">
          <div className="logoWarpper" onClick={logout}>
            <img src={platformLogo} className="platformLogo" />
            <div className="linking">{messages.expertPlatform}</div>
          </div>
          {Object.keys(userInfo).length ? (
            <UserInfo
              userInfo={userInfo}
              messages={messages}
              logout={logout}
            ></UserInfo>
          ) : (
            <HeaderAction goPage={goPage} messages={messages}></HeaderAction>
          )}
          {/* <UserInfo userInfo={userInfo} messages={messages}></UserInfo> */}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  systemTitle: '',
  isShowTabs: true,
};

export default Header;
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
