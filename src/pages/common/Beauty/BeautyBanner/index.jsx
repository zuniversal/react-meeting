import React from 'react';
import bannerImg from '@/static/img/beauty/banner.png';

const BeautyBanner = props => {
  return (
    <div className="banner">
      <div className="bannerTextWrapper">
        <div className="bannerText">{props.msg.banner1}</div>
        <div className="bannerText">{props.msg.banner2}</div>
        <div className="bannerText">{props.msg.banner3}</div>
        <div className="bannerSubText">{props.msg.bannerSub}</div>
      </div>
      <div className="bannerImgWrapper">
        <img src={bannerImg} className="bannerImg" />
      </div>
    </div>
  );
};

export default BeautyBanner;
