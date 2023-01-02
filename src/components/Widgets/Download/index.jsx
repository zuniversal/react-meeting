import React from 'react';
import { DOWNLOADS_URL } from '@/constants';
import './style.less';

const Download = props => {
  console.log(' Download ： ', props);
  const href = DOWNLOADS_URL + props.url;
  const linkAttr = props.url
    ? {
        className: 'rawLink',
        href: href,
        download: props.url,
      }
    : {};

  return (
    <a className="rawLink" {...linkAttr}>
      {props.children}
    </a>
  );
};

export default Download;
