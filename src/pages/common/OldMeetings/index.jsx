import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import { tableData1, tableData2 } from './config';
import OldMeetingsTable from './OldMeetingsTable';
import bottomImg from '@/static/img/oldMeetings/bg.png';

const OldMeetings = props => {
  const { messages } = useIntl();

  return (
    <div className="oldMeetings">
      <div className="conWrapper">
        <div className="oldMeetingsWrapper">
          <div className="oldMeetingsItem">
            <div className="title">{messages.oldMeetings.title1}</div>
            <OldMeetingsTable
              messages={messages}
              dataSource={tableData1}
            ></OldMeetingsTable>
          </div>
          <div className="oldMeetingsItem">
            <div className="title">{messages.oldMeetings.title2}</div>
            <OldMeetingsTable
              messages={messages}
              dataSource={tableData2}
            ></OldMeetingsTable>
          </div>
        </div>
      </div>
      <div className="bottomBg">
        <img src={bottomImg} className="bottomImg" />
      </div>
    </div>
  );
};

export default OldMeetings;
