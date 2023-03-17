import React, { useEffect } from 'react';
import './style.less';
import { history, useIntl, useModel } from 'umi';
import { bgCountConfig } from './config';
import icon from '@/static/img/home/meetingTheme/1.png';
import bottomImg from '@/static/img/login/bg.png';

const AdminHomeGrid = ({ messages, data }) => {
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
            {v.key && data[v.key] != null && (
              <div className="adminHomeNum">{v.key && data[v.key]}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const AdminHome = props => {
  const { messages } = useIntl();
  const { adminHomeCount, getAdminHomeCountAsync } = useModel('admin');
  console.log(' adminHomeCount ： ', adminHomeCount); //

  useEffect(() => {
    getAdminHomeCountAsync();
  }, []);

  return (
    <div className="adminHome">
      <div className="conWrapper">
        <AdminHomeGrid
          messages={messages}
          data={adminHomeCount}
        ></AdminHomeGrid>
      </div>
      <div className="bottomBg">
        <img src={bottomImg} className="bottomImg" />
      </div>
    </div>
  );
};

export default AdminHome;
