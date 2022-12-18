import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import PaperStatusTable from './PaperStatusTable';

const PaperStatus = props => {
  const { messages } = useIntl();

  return (
    <UserCenterWrapper messages={messages} className="paperStatus">
      <div className="primaryTitle">{messages.paperStatus.title}</div>
      <PaperStatusTable messages={messages}></PaperStatusTable>
    </UserCenterWrapper>
  );
};

export default PaperStatus;
