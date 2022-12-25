import React from 'react';
import './style.less';
import { history, useIntl } from 'umi';
import { bgCountConfig } from './config';
import icon from '@/static/img/home/meetingTheme/1.png';

const AdminHomeGrid = ({ messages }) => {
  // const goPage = params => history.push(params);
  const goPage = params => window.open(`/#${params}`);
  return (
    <div className="adminHomeGrid">
      {bgCountConfig.map((v, i) => (
        <div
          key={i}
          className="adminHomeGridItem"
          style={{ background: v.bg }}
          onClick={() => goPage(v.path)}
        >
          <div className="adminHomeIcon">
            <img src={v.icon} className="" />
            {/* <img src={icon} className="" /> */}
          </div>
          <div className="adminHomeCount">
            <div className="adminHomeLabel">
              {messages.adminHome[v.langKey]}
            </div>
            <div className="adminHomeNum">888</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AdminHome = props => {
  const { messages } = useIntl();
  return (
    <div className="adminHome">
      <div className="conWrapper">
        <AdminHomeGrid messages={messages}></AdminHomeGrid>
      </div>
    </div>
  );
};

export default AdminHome;
