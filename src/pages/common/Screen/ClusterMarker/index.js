import React from 'react';
import groupBy from 'lodash/groupBy';
import cls from 'classnames';
import styles from './index.less';

export default React.memo(function ClusterMarker({
  count,
  markers = [],
  hover = false,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {
  const dataGroup = groupBy(markers, 'type');
  const contents = [];
  Object.entries(dataGroup).forEach(([key, items], index) => {
    contents.push(
      <div className={`marker-icon marker-icon-${key}`} key={index}>{items.length}</div>,
    );
  });
  console.log(' ClusterMarker ： ',    )// 
  return (
    <div
      className={cls(styles.box,'aaa', { [styles.hover]: hover })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* <div className={cls(styles.marker, styles.normal)}>{count}</div>
      <div className={cls(styles.marker, styles.active)}>{contents}</div> */}
      <div className={cls(styles.marker, styles.normal)}>
        <div className={styles.cell}>{count}</div>
      </div>
      <div className={cls(styles.marker, styles.active)}>
        <div className={styles.cell}>{contents}</div>
      </div>
    </div>
  );
});
