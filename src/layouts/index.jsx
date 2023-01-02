import React, { useEffect } from 'react';
import './style.less';
import '@/static/css/index.less';
import { history, useModel } from 'umi';
import { ConfigProvider } from 'antd';
import cls from 'classnames';
import Header from './Header';
import { useSystemConfig } from '@/hooks/useSystemConfig';

const bgPath = ['/committee', '/oldMeetings'];

const locale = 'en';

const Layouts = props => {
  // console.log(' Layouts       ： ', props, history);
  const {
    location: { pathname },
  } = history;
  const isBgPath = bgPath.includes(pathname);
  const { getUserInfoAsync } = useModel('users');
  useEffect(() => {
    getUserInfoAsync();
  }, []);
  useSystemConfig();
  return (
    <div className={cls({ isBgPath, content: true })}>
      <ConfigProvider locale={locale}>
        <Header></Header>
        {props.children}
      </ConfigProvider>
    </div>
  );
};

export default Layouts; //
