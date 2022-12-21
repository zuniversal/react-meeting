import React from 'react';
import './style.less';
import { Button } from 'antd';
import { useIntl, history } from 'umi';
import g1 from '@/static/img/home/g1.png';
import g2 from '@/static/img/home/g2.png';
import g3 from '@/static/img/home/g3.png';
import {
  meetingThemeConfig,
  meetingTravelConfig,
  supporterConfig,
} from './config';

const goPage = params => history.push(params);
const goPost = params => goPage(`/postPaper`);

const Banner = props => {
  const goPage = params => {
    history.push(params);
  };
  return (
    <div className="banner">
      <div className="bannerCenter">
        <div className="title">{props.msg.title}</div>
        <div className="title">{props.msg.subTitle}</div>
        <div className="activityInfo/">{props.msg.activity}</div>
        <Button className="postBtn" type="primary" onClick={goPost}>
          {props.msg.goPost}
        </Button>
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
        <div className="meetingIntroText">{props.msg.title}</div>
        <div className="meetingIntroText">{props.msg.title}</div>
        <Button className="blueBtn" type="primary" onClick={goPost}>
          {props.msg.goPost}
        </Button>
      </div>
      <div className="meetingIntroRight">
        <img src={g1} className="g1" />
        <div className="poemWrapper">
          <div className="poem">{props.msg.title}</div>
          <div className="poem">{props.msg.title}</div>
        </div>
      </div>
    </div>
  );
};

const MeetingTheme = props => {
  return (
    <div className="meetingThemeWrapper">
      <div className="meetingTheme">
        <div className="title">{props.msg.meetingTheme}</div>
        <div className="subTitle">subTitle</div>
        <div className="meetingThemeGrid">
          {/* <Row>
            {meetingThemeConfig.map((v) => <Col span={6} key={v.src} className='meetingThemeGridItem'>
              <img src={v.src} className="meetingThemeIcon" />
              <div>{v.label}</div>
            </Col>)}
          </Row> */}
          {meetingThemeConfig.map(v => (
            <div key={v.src} className="meetingThemeGridItem">
              <img src={v.src} className="meetingThemeIcon" />
              <div>{v.label}</div>
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
          <img src={g2} className="g2" />
          <div className="poemWrapper">
            <div className="poem">{props.msg.title}</div>
            <div className="poem">{props.msg.title}</div>
          </div>
        </div>
        <div className="meetingRegRight">
          {supporterConfig.map((v, index) => (
            <div key={v.src} className="meetingRegItem">
              <div className="meetingRegIndex">0{index + 1}</div>
              <div className="meetingRegTitle">{v.label}</div>
              <div>{v.label}</div>
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
        <div className="title">
          {props.msg.meetingReg}
          <div className="subTitle">{props.msg.meetingReg}</div>
        </div>
        <div className="title">
          {props.msg.meetingReg}
          <div className="subTitle">{props.msg.meetingReg}</div>
        </div>
      </div>
    </div>
  );
};

const MeetingTravel = props => {
  return (
    <div className="meetingTravel">
      <div className="title">{props.msg.meetingReg}</div>
      <div className="subTitle">{props.msg.meetingReg}</div>
      <div className="meetingTravelGrid">
        {meetingTravelConfig.map(v => (
          <div key={v.src} className="meetingTravelGridItem">
            <img src={v.src} className="meetingTravelIcon" />
            <div>{v.label}</div>
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
          {supporterConfig.map(v => (
            <div key={v.src} className="supporterGridItem">
              <img src={v.src} className="supporterIcon" />
              <div>{v.label}</div>
            </div>
          ))}
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
    </div>
  );
};

export default Home;
