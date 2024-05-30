import React from 'react';
import './style.less';
import { connect, history, useIntl, useModel } from 'umi';
import { Tabs, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from '@/static/img/logo.png';
import platformLogo from '@/static/img/platformLogo.png';
import { removeItems } from '@/utils';
import cls from 'classnames';
import {
  hiddenTabsConfig,
  bgRoutes,
  hiddenRoutes,
  hiddenFeTabs,
} from './config';
import { LOGIN, POST_PAPER } from '@/constants';
const { TabPane } = Tabs;

const bgRole = [1, 4];
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
    label: 'Previous Conferences',
    label: 'Previous Sessions',
    key: '/oldMeetings',
  },
  // {
  //   tab: '大会展示',
  //   label: 'Conference Review',
  //   key: '/exhibition',
  // },
  {
    tab: '联系我们',
    label: 'Contact Us',
    key: '/contactUs',
  },
  ...hiddenFeTabs,
  ...hiddenTabsConfig,
];

const tabKeys = tabConfigs.map(v => v.key);

const activeKey = window.location.hash.split('#')[1];
// console.log(' activeKey ： ', tabKeys, tabConfigs); //

// const mapStateToProps = ({tab}) => tab;
// export default connect(mapStateToProps, dispatch => {
//   return {
//     setActiveKey: () => {
//       dispatch({ type: 'tab/setActiveKey' });
//     },
//   };
// })(TabsCom);

const TabsCom = props => {
  const { userInfo } = useModel('users');
  const onChange = key => {
    console.log(' onChange userInfo ： ', userInfo, key);
    if (key === POST_PAPER && !Object.keys(userInfo).length) {
      history.push(LOGIN);
    } else {
      history.push(key);
      props.setActiveKey(key);
    }
  };
  return (
    <Tabs
      // defaultActiveKey={props.activeKey}
      activeKey={props.activeKey}
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
    <div
      className={cls({ linking: props.activeKey === '/login', loginBtn: true })}
      onClick={() => props.goPage(`/login`)}
    >
      {props.messages.logan}
    </div>
    <div
      className={cls({ linking: props.activeKey === '/register' })}
      onClick={() => props.goPage(`/register`)}
    >
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
  const goUserCenter = params => {
    if (!props.userInfo.isAdminApprover) {
      props.goPage(`/userCenter`);
    }
  };
  const goUserCenter2 = params => {
    if (!props.userInfo.isAdminApprover) {
      props.goPage(`/emailCenter`);
    } else {
      props.goPage(`/adminHome`);
    }
  };
  return (
    <div className="userInfo">
      {/* <img
        src={props.userInfo.avatar}
        className="avatar"
        onClick={goUserCenter}
      /> */}
      {/* <div className="userName">{props.userInfo.firstName + props.userInfo.secondName}</div> */}
      <div
        className={cls({
          linking: props.activeKey === '/emailCenter',
          userName: true,
        })}
        onClick={goUserCenter2}
      >
        {props.userInfo.email}
      </div>
      {!props.userInfo.isAdminApprover && (
        <span
          className={cls({
            linking: props.activeKey === '/userCenter',
            underline: true,
          })}
          onClick={goUserCenter}
        >
          {props.messages.userCenter.title}
        </span>
      )}
      <div className="underline" onClick={props.logout}>
        {props.messages.logout}
      </div>
    </div>
  );
};

const Header = props => {
  const { messages } = useIntl();
  const { activeKey, setActiveKey } = useModel('systemConfig');
  const { userInfo, logout } = useModel('users');
  console.log(' Header ： ', activeKey, props, messages, userInfo); //

  const goPage = params => {
    history.push(params);
    setActiveKey(params);
  };

  const logoutProxy = () => {
    console.log(' logoutProxy   ,   ： ');
    setActiveKey('/login');
    logout('/login');
  };

  const logoutAdminProxy = params => {
    setActiveKey('/login?p=admin');
    logout('/login?p=admin');
  };

  const isExpertPlatform = bgRoutes.includes(activeKey);
  const actionCom = Object.keys(userInfo).length ? (
    <UserInfo
      goPage={goPage}
      activeKey={activeKey}
      userInfo={userInfo}
      messages={messages}
      logout={logoutProxy}
    ></UserInfo>
  ) : (
    <HeaderAction
      activeKey={activeKey}
      goPage={goPage}
      messages={messages}
    ></HeaderAction>
  );

  const platformCom = (
    <div className="logoWarpper" onClick={logoutAdminProxy}>
      <img src={platformLogo} className="platformLogo" />
      <div className={cls({ linking: bgRoutes.includes(activeKey) })}>
        {messages.expertPlatform}
      </div>
    </div>
  );

  const infoCom1 = (
    <div className="headerRight">
      {actionCom}
      {platformCom}
    </div>
  );

  const infoCom2 = (
    <div className="headerRight">
      {platformCom}
      {actionCom}
    </div>
  );
  const infoCom = bgRole.includes(userInfo.titleID) ? infoCom2 : infoCom1;

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
          <TabsCom
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            {...props}
          ></TabsCom>
        </div>
        {/* {props.isShowTabs && <HeaderAction goPage={goPage}></HeaderAction>} */}

        {/* {infoCom} */}
        <div className="headerRight">
          {actionCom}
          {/* {!Object.keys(userInfo).length && platformCom} */}
          {platformCom}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  // systemTitle: '',
  // isShowTabs: true,
};

export default Header;
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
