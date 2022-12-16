import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import intro from '@/static/img/contactUs/intro.png';

const ContactUsList = ({ messages }) => {
  return (
    <div className="contactUsList">
      <img src={intro} className="contactUsImg" />
      <div className="contactUsTitle">{messages.contactUs.title}</div>
      <div className="contactUsContent">{messages.contactUs.content}</div>
    </div>
  );
};

const ContactUs = props => {
  const { messages } = useIntl();
  return (
    <div className="contactUs">
      <div className="conWrapper">
        <div className="title">{messages.contactUs.title}</div>
        <ContactUsList messages={messages}></ContactUsList>
      </div>
      <div className="bottomBg"></div>
    </div>
  );
};

export default ContactUs;
