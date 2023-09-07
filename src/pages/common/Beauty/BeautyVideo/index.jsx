import React from 'react';
import { DOWNLOADS_URL } from '@/constants';

const videoUrl = DOWNLOADS_URL + '/beauty.mp4';
const videoUrl2 = DOWNLOADS_URL + '/beauty2.mov';
// const videoUrl2 = DOWNLOADS_URL + '/taihumingzhu.mov';
// const videoUrl = ''

const BeautyVideo = props => {
  return (
    <div className="beautyVideoWrapper">
      <video src={videoUrl} type="video/mp4" controls className="video" />
      <video src={videoUrl2} type="video/mov" controls className="video" />
    </div>
  );
};

export default BeautyVideo;
