import React from 'react';
import './style.less';

const InfoCol = props => {
  const { messages, msgKey, config } = props;
  return (
    <div className="infoCol">
      {config.map(v => (
        <div key={v.key} className="infoColRow">
          <div className="label">{messages[msgKey][v.langKey]}</div>
          <div className={`val ${v.valCls || ''}`}>
            {messages[msgKey][v.langKey]}
          </div>
        </div>
      ))}
    </div>
  );
};

InfoCol.defaultProps = {
  messages: {},
  msgKey: '',
  config: [],
};

export default InfoCol;
