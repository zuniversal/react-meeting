import React from 'react';
import './style.less';
import { Button } from 'antd';
import { useIntl, history, useModel } from 'umi';
import g1 from '@/static/img/home/g1.png';
import g2 from '@/static/img/home/g2.png';
import g3 from '@/static/img/home/g3.png';
import activityLogo from '@/static/img/home/activityLogo.png';
import bannerImg from '@/static/img/home/banner.png';
import backTop from '@/static/img/home/backTop.png';
import bottomImg from '@/static/img/home/bottomBg.png';
import {
  meetingThemeConfig,
  meetingTravelConfig,
  supporterConfig,
} from './config';
import Download from '@/components/Widgets/Download';

const goPage = params => history.push(params);
const goPost = params => goPage(`/postPaper`);

const configs = [
  {
    className: 'backTop',
    key: 'backTop',
    icon: backTop,
  },
];

const FloatButton = props => {
  const onClick = params => {
    console.log(' onClick   params,   ： ', params);
    if (params.key === 'backTop') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // return <div className='floatBtnWrapper' >
  //   <img src={v.icon} className="floatIcon" />
  // </div>
  return (
    <div className="floatingBtnWrapper">
      {configs.map((v, i) => {
        const floatingBtn = (
          <div
            className={`floatingBtn ${v.className ?? ''}`}
            key={i}
            onClick={() => onClick(v)}
          >
            <img src={v.icon} className="floatingIcon" />
          </div>
        );
        return floatingBtn;
      })}
    </div>
  );
};

const Banner = props => {
  const { goAndSetkey } = useModel('systemConfig');
  const goPost = params => goAndSetkey(`/postPaper`);
  return (
    <div className="banner">
      <div className="bannerCenter">
        <div className="bannerTopWrapper">
          <img src={activityLogo} className="activityLogo" />
          <div className="titleWrapper">
            <div className="title bannerTitle">{props.msg.title}</div>
            <div className="title bannerTitle">{props.msg.subTitle}</div>
          </div>
        </div>
        <div className="title activityInfo">{props.msg.activity}</div>
        <Button className="postBtn bigBtn" type="primary" onClick={goPost}>
          {props.msg.goPost}
        </Button>
      </div>
      <div className="bannerImgWrapper">
        <img src={bannerImg} className="bannerImg" />
      </div>
    </div>
  );
};

const CenterPic = props => {
  return (
    <div className="centerPic">
      <div className="centerBg"></div>
    </div>
  );
};

const MeetingIntro = props => {
  return (
    <div className="meetingIntro">
      <div className="meetingIntroLeft">
        <div className="title">{props.msg.meetingIntro}</div>

        {props.msg.meetingIntroContent.map((v, i) => (
          <div key={i} className="meetingIntroText">
            {v}
          </div>
        ))}
        {/* <div className="meetingIntroText">{props.msg.title}</div> */}
        {/* <Button className="blueBtn bigBtn" type="primary" onClick={goPost}>
          {props.msg.callPaper}
        </Button> */}
        <Download url={'CALL_FOR_PAPERS_STABS2024.pdf'}>
          <Button className="blueBtn bigBtn" type="primary">
            {props.msg.callPaper}
          </Button>
        </Download>
      </div>
      <div className="meetingIntroRight">
        <img src={g1} className="g1" />
        {/* <div className="poemWrapper">
          <div className="poem">魅力无锡，吴韵文化</div>
          <div className="poem">太湖明珠</div>
        </div> */}
      </div>
    </div>
  );
};

const MeetingTheme = props => {
  return (
    <div className="meetingThemeWrapper">
      <div className="meetingTheme">
        <div className="title">{props.msg.meetingTheme}</div>
        <div className="subTitle">{props.msg.meetingThemeSub}</div>
        <div className="meetingThemeGrid">
          {/* <Row>
            {meetingThemeConfig.map((v) => <Col span={6} key={v.src} className='meetingThemeGridItem'>
              <img src={v.src} className="meetingThemeIcon" />
              <div>{v.label}</div>
            </Col>)}
          </Row> */}
          {meetingThemeConfig.map((v, i) => (
            <div key={v.src} className="meetingThemeGridItem">
              <div className="meetingThemeIcon">
                <img src={v.src} className="" />
              </div>
              <div className="meetingThemeLabel">
                {props.msg.meetingThemeList[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MeetingReg = props => {
  return (
    <div className="meetingReg">
      <div className="title">{props.msg.meetingReg}</div>
      <div className="meetingRegWrapper">
        <div className="meetingRegLeft">
          <div className="">
            <img src={g2} className="g2" />
          </div>
          {/* <div className="poemWrapper">
            <div className="poem">人文无锡，江南胜地</div>
            <div className="poem">惠山锡山</div>
          </div> */}
        </div>
        <div className="meetingRegRight">
          {supporterConfig.map((v, index) => (
            <div key={v.src} className="meetingRegItem">
              <div className="meetingRegIndex">0{index + 1}</div>
              {props.msg[`meetingRegList${[index + 1]}`].map((v, i) => (
                <div className="meetingRegTitle" key={i}>
                  {v.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MeetingInfo = props => {
  return (
    <div className="meetingInfo">
      <img src={g3} className="g3" />
      <div className="meetingInfoWrapper">
        <div className="meetingInfoRow">
          <div className="meetingInfoTitle">{props.msg.meetingInfoTitle1}</div>
          {props.msg.meetingInfoList1.map((v, i) => (
            <div className="meetingInfoItem" key={i}>
              {v.label}
            </div>
          ))}
        </div>
        <div className="meetingInfoRow">
          <div className="meetingInfoTitle">{props.msg.meetingInfoTitle2}</div>
          {props.msg.meetingInfoList2.map((v, i) => (
            <div className="meetingInfoItem" key={i}>
              {v.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MeetingTravel = props => {
  return (
    <div className="meetingTravel">
      <div className="title">{props.msg.meetingTravel}</div>
      <div className="subTitle">{props.msg.meetingTravelSub}</div>
      <div className="meetingTravelGrid">
        {meetingTravelConfig.map((v, i) => (
          <div key={v.src} className="meetingTravelGridItem">
            <img src={v.src} className="meetingTravelIcon" />
            <div>{props.msg.meetingTravelList[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Supporter = props => {
  return (
    <div className="supporter">
      <div className="supporterWrapper">
        <div className="title">{props.msg.supporter}</div>
        <div className="supporterGrid">
          {supporterConfig.map((v, i) => (
            <div key={v.src} className="supporterGridItem">
              <div className="supporterIcon">
                <img src={v.src} className={`supporterIcon${i + 1}`} />
              </div>
              <div className="supporterLabel">{props.msg.supporterList[i]}</div>
            </div>
          ))}
        </div>
        <div className="extraWrapper">
          <div className="">
            <div className="subBoldTitle">{props.msg.thirdTitle}</div>
            <div className="subBoldTitle">{props.msg.fourTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExtraInfo = props => {
  return (
    <div className="extraInfo">
      <div className="extraWrapper">
        <div className="">
          <div className="subBoldTitle">{props.msg.thirdTitle}</div>
          <div className="subBoldTitle">{props.msg.fourTitle}</div>
        </div>
      </div>
    </div>
  );
};

const Home = props => {
  console.log(' Home       ： ', props);
  const { messages } = useIntl();
  return (
    <div className="home">
      <Banner msg={messages.home}></Banner>
      <MeetingIntro msg={messages.home}></MeetingIntro>
      <CenterPic msg={messages.home}></CenterPic>
      <MeetingTheme msg={messages.home}></MeetingTheme>
      <MeetingReg msg={messages.home}></MeetingReg>
      <MeetingInfo msg={messages.home}></MeetingInfo>
      <MeetingTravel msg={messages.home}></MeetingTravel>
      <Supporter msg={messages.home}></Supporter>
      {/* <ExtraInfo msg={messages.home}></ExtraInfo> */}
      {/* <Extra msg={messages.home}></Extra> */}
      <FloatButton></FloatButton>
    </div>
  );
};

export default Home;
