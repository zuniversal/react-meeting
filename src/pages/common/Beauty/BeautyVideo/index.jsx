import React from 'react';
import { DOWNLOADS_URL } from '@/constants';

const videoUrl = DOWNLOADS_URL + '/beauty.mp4';
// const videoUrl = ''

const BeautyVideo = props => {
  return (
    <div className="beautyVideoWrapper">
      <video src={videoUrl} type="video/mp4" controls className="video" />
    </div>
  );
};

export default BeautyVideo;
