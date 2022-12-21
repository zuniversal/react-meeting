import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import OldMeetingsTable from './OldMeetingsTable';

const OldMeetings = props => {
  const { messages } = useIntl();

  return (
    <div className="oldMeetings">
      <div className="conWrapper">
        <div className="oldMeetingsWrapper">
          <div className="oldMeetingsItem">
            <div className="title">{messages.oldMeetings.title}</div>
            <OldMeetingsTable messages={messages}></OldMeetingsTable>
          </div>
          <div className="oldMeetingsItem">
            <div className="title">{messages.oldMeetings.title}</div>
            <OldMeetingsTable messages={messages}></OldMeetingsTable>
          </div>
        </div>
      </div>
      <div className="bottomBg"></div>
    </div>
  );
};

export default OldMeetings;
