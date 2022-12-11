import React from 'react';
import './style.less';
import Header from '@/layouts/Header';

const LrWrapper = props => {
  return (
    <div className="lrWrapper">
      <Header></Header>
      <div className="lrFormWrapper">
        <div className="lrForm">
          <div className="sysystemTitle">{props.title}</div>
          {props.content}
        </div>
        {props.children}
        {/* <div className="bgPic"></div> */}
      </div>
    </div>
  );
};

export default LrWrapper;
