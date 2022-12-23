import React, { useEffect } from 'react';
import './style.less';
import '@/static/css/index.less';
import { useModel } from 'umi';
import Header from './Header';

const Layouts = props => {
  console.log(' Layouts       ： ', props);
  const { getUserInfoAsync } = useModel('users')
  useEffect(() => {
    getUserInfoAsync()
  }, [])
  return (
    <div className="content">
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layouts; //
