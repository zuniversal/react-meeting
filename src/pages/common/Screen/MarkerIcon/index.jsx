import React from 'react';
import cls from 'classnames';
import styles from './index.less';

export default React.memo(function MarkerIcon(props) {
  const { selected, error, gray } = props;
  const type = error ? `${props.type}-error` : props.type;
  const icon = `icon-marker-${type}`;
  console.log(' MarkerIcon ： ', props   )// 
  return (
    <div
      className={cls(styles.icon, icon, { selected, gray })}
    />
  );
})
