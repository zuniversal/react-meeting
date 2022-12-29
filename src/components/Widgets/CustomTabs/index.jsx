import React from 'react';
import './style.less';

const CustomTabs = props => {
  console.log(' CustomTabs props ： ', props); //
  return (
    <div className="customTabs">
      {props.children}
      <div className="bottomBarWrapper">
        {props.tabConfigs.map((v, i) => (
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

export default CustomTabs;
