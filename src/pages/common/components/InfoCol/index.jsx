import React from 'react';
import './style.less';

const InfoCol = props => {
  const { messages, msgKey, config, data } = props;
  return (
    <div className="infoCol">
      {config.map(v => (
        <div key={v.key} className="infoColRow">
          <div className="label">{messages[msgKey][v.langKey]}</div>
          <div className={`val ${v.valCls || ''}`}>
            {v.prefix}
            {v.dataMap ? v.dataMap[data[v.key]] : data[v.key]}
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
  data: {},
};

export default InfoCol;
