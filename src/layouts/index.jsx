import React, { useEffect } from 'react';
import './style.less';
import '@/static/css/index.less';
import { useModel } from 'umi';
import { ConfigProvider } from 'antd';
import Header from './Header';
import { useSystemConfig } from '@/hooks/useSystemConfig';

const locale = 'en';

const Layouts = props => {
  console.log(' Layouts       ： ', props);
  const { getUserInfoAsync } = useModel('users');
  useEffect(() => {
    getUserInfoAsync();
  }, []);
  useSystemConfig();
  return (
    <div className="content">
      <ConfigProvider locale={locale}>
        <Header></Header>
        {props.children}
      </ConfigProvider>
    </div>
  );
};

export default Layouts; //
