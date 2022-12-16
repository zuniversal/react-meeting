import React from 'react';
import './style.less';
import { useIntl } from 'umi';

export const supporterConfig = [
  {
    src: 't1',
    title: '博士',
    content: '博士',
  },
  {
    src: 't2',
    title: '博士',
    content: '博士',
  },
];

const Festival = ({ msg }) => {
  return (
    <div className="festival">
      {supporterConfig.map((v, i) => {
        const img = <img src={v.src} className="festivalImg" />;
        const info = (
          <div className="festivalInfoWrapper">
            <div className="festivalTitle">{msg.title}</div>
            <div className="festivalContent">{msg.content}</div>
          </div>
        );
        const layout1 = (
          <div
            key={v.src}
            className={`festivalItem ${i % 2 ? 'festivalItemRight' : ''}`}
          >
            {info}
            {img}
          </div>
        );
        const layout2 = (
          <div key={v.src} className={`festivalItem`}>
            {img}
            {info}
          </div>
        );
        return i % 2 ? layout1 : layout2;
      })}
    </div>
  );
};

const MeetingTravel = ({ msg }) => {
  return (
    <div className="meetingTravel">
      <div className="title">{msg.meetingReg}</div>
      <div className="subTitle">{msg.meetingReg}</div>
      <div className="meetingTravelGrid">
        {supporterConfig.map(v => (
          <div key={v.src} className="meetingTravelGridItem">
            <img src={v.src} className="meetingTravelIcon" />
            <div>{v.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Activity = props => {
  const { messages } = useIntl();
  return (
    <div className="activity">
      <div className="conWrapper">
        <div className="title">{messages.activity.title}</div>
        <Festival msg={messages.home}></Festival>
        <MeetingTravel msg={messages.home}></MeetingTravel>
        <MeetingTravel msg={messages.home}></MeetingTravel>
      </div>
    </div>
  );
};

export default Activity;
