import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import PaperStatusTable from './PaperStatusTable';

const PaperStatus = props => {
  const { messages } = useIntl();
  const { getPaperListAsync, postList } = useModel('postPaper');
  useEffect(() => {
    getPaperListAsync();
  }, []);

  return (
    <UserCenterWrapper messages={messages} className="paperStatus">
      <div className="primaryTitle">{messages.paperStatus.title}</div>
      <PaperStatusTable
        messages={messages}
        dataSource={postList}
      ></PaperStatusTable>
    </UserCenterWrapper>
  );
};

export default PaperStatus;
