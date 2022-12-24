import React, { useState } from 'react';
import './style.less';
import { Tabs } from 'antd';
import { useIntl } from 'umi';
import {
  internalCommitteeData,
  localCommitteeData,
} from './config';
import { CommitteeTable, CommitteeLocaleTable } from './CommitteeTable';

const TabsCom = props => {
  // console.log(' TabsCom props ： ', props,  )//
  const tabConfigs = [
    {
      tab: '大会展示',
      label: props.messages.committee.internalCommittee,
      key: 'internalCommittee',
    },
    {
      tab: '联系我们',
      label: props.messages.committee.localCommittee,
      key: 'localCommittee',
    },
  ];
  return (
    <Tabs
      activeKey={props.activeKey}
      onChange={props.setTab}
      items={tabConfigs}
    ></Tabs>
  );
};

const Committee = props => {
  const { messages } = useIntl();
  const [tab, setTab] = useState('internalCommittee');
  return (
    <div className="committee">
      <div className="committeeWrapper">
        <TabsCom messages={messages} setTab={setTab}></TabsCom>
        {tab === 'internalCommittee' && (
          <CommitteeTable messages={messages} dataSource={internalCommitteeData}></CommitteeTable>
        )}
        {tab === 'localCommittee' && (
          <CommitteeLocaleTable messages={messages} dataSource={localCommitteeData}></CommitteeLocaleTable>
        )}
      </div>
      <div className="bottomBg"></div>
    </div>
  );
};

export default Committee;
