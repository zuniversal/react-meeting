import React from 'react';
import './style.less';
import { useIntl } from 'umi';

export const supporterConfig = [
  {
    src: 't1',
    title: '博士',
    content: '博士',
  },
];

const ExhibitionList = ({ messages }) => {
  return (
    <div className="exhibitionList">
      {supporterConfig.map((v, i) => (
        <div key={i} className="exhibitionListRow">
          <img src={v.src} className="exhibitionImg" />
          <div className="exhibitionTitle">{v.title}</div>
          <div className="exhibitionContent">{v.content}</div>
        </div>
      ))}
    </div>
  );
};

const Exhibition = props => {
  const { messages } = useIntl();
  return (
    <div className="exhibition">
      <div className="conWrapper">
        <div className="title">{messages.exhibition.title}</div>
        <ExhibitionList messages={messages}></ExhibitionList>
      </div>
      <div className="bottomBg"></div>
    </div>
  );
};

export default Exhibition;
