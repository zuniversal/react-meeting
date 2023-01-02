import React from 'react';
import p1 from '@/static/img/beauty/1.png';
import p2 from '@/static/img/beauty/2.png';
import p3 from '@/static/img/beauty/3.png';
import p4 from '@/static/img/beauty/4.png';
import p5 from '@/static/img/beauty/5.png';
import p6 from '@/static/img/beauty/6.png';
import p7 from '@/static/img/beauty/7.png';
import p8 from '@/static/img/beauty/8.png';
import p9 from '@/static/img/beauty/9.png';
import p10 from '@/static/img/beauty/10.png';
import p11 from '@/static/img/beauty/11.png';
import p12 from '@/static/img/beauty/12.png';
import p13 from '@/static/img/beauty/13.png';

const BeautyIntro = props => {
  return (
    <div className="beautyIntroWrapper">
      <div className="beautyIntro">
        <div className="beautyIntroHalf beautyIntroEnd">
          <div className="beautyIntroText introTextHalf70">
            <div className="beautyIntroTitle">{props.msg.title1}</div>
            {props.msg.culture}
          </div>
        </div>
      </div>
      <div className="beautyIntro beautyIntro2">
        <div className="beautyIntroHalf">
          <img src={p1} className="p1" />
        </div>
        <div className="beautyIntroHalf beautyIntro1Right">
          <img src={p2} className="p2" />
          <img src={p3} className="p3" />
        </div>
      </div>
      <div className="beautyIntro">
        <div className="beautyIntroHalf beautyIntroEnd">
          <div className="beautyIntroText introTextHalf70">
            <div className="beautyIntroTitle">{props.msg.title2}</div>
            {props.msg.economy}
          </div>
        </div>
      </div>
      <div className="beautyIntro beautyIntro2">
        <div className="beautyIntroHalf">
          <img src={p4} className="p4" />
        </div>
        <div className="beautyIntroHalf beautyIntro2Right">
          <img src={p5} className="p5" />
        </div>
      </div>
      <div className="beautyIntro">
        <div className="beautyIntroHalf beautyIntroEnd">
          <div className="beautyIntroText introTextHalf70">
            <div className="beautyIntroTitle">{props.msg.title3}</div>
            {props.msg.nature}
          </div>
        </div>
      </div>
      <div className="beautyIntro beautyIntro2">
        <div className="beautyIntroHalf">
          <img src={p6} className="p6" />
        </div>
        <div className="beautyIntroHalf beautyIntro2Right">
          <img src={p7} className="p7" />
        </div>
      </div>
      <div className="beautyIntro beautyIntro4">
        <div className="beautyIntroText beautyIntroCenter">
          <div className="introTextHalf">
            <div className="beautyIntroTitle">{props.msg.title4}</div>
            {props.msg.nature}
          </div>
          <img src={p8} className="p8" />
        </div>
      </div>
      <div className="beautyIntro beautyIntro5">
        <div className="beautyIntroText beautyIntroCenter">
          <div className="introTextHalf">
            <div className="beautyIntroTitle">{props.msg.title5}</div>
            {props.msg.transportation}
          </div>
        </div>
      </div>
      <div className="beautyIntro beautyIntro6">
        <div className="beautyIntroHalf">
          <img src={p9} className="p9" />
        </div>
        <div className="beautyIntroHalf beautyIntro2Right">
          <img src={p10} className="p10" />
        </div>
      </div>
      <div className="beautyIntro beautyIntro7">
        <div className="beautyIntroText beautyIntroCenter">
          <div className="introTextHalf">
            <div className="beautyIntroTitle">{props.msg.title6}</div>
            {props.msg.society}
          </div>
        </div>
      </div>
      <div className="beautyIntroGrid">
        {[p11, p12, p13].map((v, i) => (
          <img src={v} className="gridImgItem" key={i} />
        ))}
      </div>
    </div>
  );
};

export default BeautyIntro;
