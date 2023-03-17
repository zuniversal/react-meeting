import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import intro from '@/static/img/contactUs/intro.png';
import bottomImg from '@/static/img/contactUs/bg.png';
import { infoConfig } from './config';

const ContactUsList = ({ messages, config }) => {
  return config.map((v, i) => (
    <div className="contactUsList" key={i}>
      {/* <div className="contactUsContent">{messages.contactUs.content}</div> */}
      {/* <div className="contactUsContent">{v}</div> */}
      <div className="contactUsRow">{v}</div>
    </div>
  ));
};

const ContactUs = props => {
  const { messages } = useIntl();
  return (
    <div className="contactUs">
      <div className="conWrapper">
        <div className="title">{messages.contactUs.title}</div>
        {/* <img src={intro} className="contactUsImg" /> */}
        <div className="contactUsTitle">{messages.contactUs.name}</div>
        <ContactUsList messages={messages} config={infoConfig}></ContactUsList>
      </div>
      <div className="bottomBg">
        <img src={bottomImg} className="bottomImg" />
      </div>
    </div>
  );
};

export default ContactUs;
