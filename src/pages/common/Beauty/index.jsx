import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import BeautyBanner from './BeautyBanner';
import BeautyVideo from './BeautyVideo';
import BeautyIntro from './BeautyIntro';

const Beauty = props => {
  const { messages } = useIntl();
  return (
    <div className="beauty">
      <BeautyBanner msg={messages.beauty}></BeautyBanner>
      <div className="beautyWrapper">
        <BeautyVideo></BeautyVideo>
        <BeautyIntro msg={messages.beauty}></BeautyIntro>
      </div>
    </div>
  );
};

export default Beauty;
