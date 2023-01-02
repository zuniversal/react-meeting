import React from 'react';
import './style.less';
import Header from '@/layouts/Header';
import cls from 'classnames';
import bg from '@/static/img/login/bg.png';
import adminBg from '@/static/img/login/adminBg.png';

const LrWrapper = props => {
  const bgImg = props.isBgPlatform ? adminBg : bg;
  return (
    <div className={cls({ isBgPlatform: props.isBgPlatform, lrWrapper: true })}>
      <Header></Header>
      <div className="lrFormWrapper">
        {props.isBgPlatform && <div className="bgTitle">{props.bgTitle}</div>}
        <div className="lrForm">
          <div className="sysystemTitle">{props.title}</div>
          {props.content}
        </div>
        {props.children}
      </div>
      <div className="bgPic">
        {/* <img src={bgImg} className="bottomImg" /> */}
      </div>
    </div>
  );
};

export default LrWrapper;
