import React from 'react';
import './style.less';
import { Button, Row, Col } from 'antd';
import { useIntl, useModel } from 'umi';
import g1 from '@/static/img/home/g1.png';
import g2 from '@/static/img/home/g2.png';
import g3 from '@/static/img/home/g3.png';
import {
  meetingThemeConfig,
  meetingTravelConfig,
  supporterConfig,
} from './config';

const Banner = props => {
  const goPage = params => {
    history.push(params);
  };
  return (
    <div className="banner">
      <div className="bannerCenter">
        <div className="title">{props.msg.title}</div>
        <div className="subTitle">{props.msg.subTitle}</div>
        <div className="activity">{props.msg.activity}</div>
        <Button type="primary" onClick={() => props.goPage(`/postPaper`)}>
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
        <Button type="primary" onClick={() => props.goPage(`/postPaper`)}>
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
    <div className="meetingTheme">
      <div className="title">{props.msg.meetingTheme}</div>
      <div className="xxx">xxx</div>
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
  );
};

const MeetingReg = props => {
  return (
    <div className="meetingReg">
      <div className="title">{props.msg.meetingReg}</div>
      <div className="meetingRegLeft">
        <img src={g2} className="g2" />
        <div className="poemWrapper">
          <div className="poem">{props.msg.title}</div>
          <div className="poem">{props.msg.title}</div>
        </div>
      </div>
    </div>
  );
};

const MeetingInfo = props => {
  return (
    <div className="meetingInfo">
      <img src={g3} className="g3" />
      <div className="title">
        {props.msg.meetingReg}
        <div className="subTitle">{props.msg.meetingReg}</div>
      </div>
      <div className="title">
        {props.msg.meetingReg}
        <div className="subTitle">{props.msg.meetingReg}</div>
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
  );
};

const Home = props => {
  console.log(' Home       ： ', props);
  const intl = useIntl();
  const { messages } = intl;
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
