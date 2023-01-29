import React from 'react';
import './style.less';

const InfoDesc = props => {
  const { messages, msgKey, config, data } = props;
  return (
    <div className={`infoDesc ${props.className ?? ''}`}>
      {config.map(v => (
        <div key={v.key} className="infoDescRow">
          <div className="label">{messages[msgKey][v.langKey]}</div>
          <div className={`val ${v.valCls || ''}`}>
            {v.prefix}
            {data[v.key]}
          </div>
        </div>
      ))}
    </div>
  );
};

InfoDesc.defaultProps = {
  messages: {},
  msgKey: '',
  config: [],
  data: {},
};

export default InfoDesc;
