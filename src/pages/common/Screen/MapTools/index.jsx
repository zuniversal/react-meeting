import React from 'react';
import { createPortal } from 'react-dom';
import styles from './index.less'
console.log(' MapToolsMapTools ： ',    )// 
export default class MapTools extends React.Component {

  render() {
    const box = document.querySelector('.amap-controls');
    const rights = document.querySelector('.amap-controlbar').style.right;
    const {isNormal, scale} = this.props;
    console.log(' MapTools ： ', box, right  )// 
    if (!box) {
      return null
    }
    const right = isNormal ? 920 : 720
    return createPortal(
      <div className={styles.box} style={{right: `${rights.split('px')[0] * 1 + 20}px`}}>
        <div className={styles.btnScale} onClick={this.props.handleScale}></div>
        <div className={styles.btnLocation} onClick={this.props.handleLocation}></div>
      </div>, box
    )
  }
}
