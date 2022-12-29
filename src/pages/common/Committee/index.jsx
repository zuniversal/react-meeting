import React, { useState } from 'react';
import './style.less';
import { Tabs } from 'antd';
import { useIntl } from 'umi';
import { internalCommitteeData, localCommitteeData } from './config';
import { CommitteeTable, CommitteeLocaleTable } from './CommitteeTable';
import CustomTabs from '@/components/Widgets/CustomTabs';
import bottomImg from '@/static/img/committee/bg.png';

const TabsCom = props => {
  console.log(' TabsCom props ： ', props); //
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
    <CustomTabs tab={props.tab} tabConfigs={tabConfigs}>
      <Tabs
        activeKey={props.activeKey}
        onChange={props.setTab}
        items={tabConfigs}
      ></Tabs>
    </CustomTabs>
  );
  return (
    <div className="customTabs">
      <Tabs
        activeKey={props.activeKey}
        onChange={props.setTab}
        items={tabConfigs}
      ></Tabs>
      <div className="bottomBarWrapper">
        {tabConfigs.map((v, i) => (
          <div className={`bottomBarTrack`} key={i}>
            <div
              className={`bottomBar ${props.tab === v.key ? 'activeBar' : ''}`}
              key={i}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Committee = props => {
  const { messages } = useIntl();
  const [tab, setTab] = useState('internalCommittee');
  return (
    <div className="committee">
      <div className="committeeWrapper">
        <TabsCom messages={messages} tab={tab} setTab={setTab}></TabsCom>
        {tab === 'internalCommittee' && (
          <CommitteeTable
            messages={messages}
            dataSource={internalCommitteeData}
          ></CommitteeTable>
        )}
        {tab === 'localCommittee' && (
          <CommitteeLocaleTable
            messages={messages}
            dataSource={localCommitteeData}
          ></CommitteeLocaleTable>
        )}
      </div>
      <div className="bottomBg">
        <img src={bottomImg} className="bottomImg" />
      </div>
    </div>
  );
};

export default Committee;
