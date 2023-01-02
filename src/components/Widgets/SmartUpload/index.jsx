import React from 'react';
import './style.less';
import PropTypes from 'prop-types';
import { Upload } from 'antd';
import { UPLOADFILE_URL } from '@/constants';
import { getToken, tips } from '@/utils';

const SmartUpload = props => {
  const uploadProps = {
    name: 'file',
    className: 'smartUpload',
    action: UPLOADFILE_URL,
    headers: {
      token: getToken(),
    },
    onChange(e) {
      console.log(' onChange ： ', e); //
      if (e.file.status === 'done') {
        tips(`${e.file.name} Upload successfully！`, 1);
        props.succ && props.succ(e);
        props.finish && props.finish(e);
      } else if (e.file.status === 'error') {
        tips(`${e.file.name} Upload fail！`, 0);
        props.fail && props.fail(e);
        props.finish && props.finish(e);
      }
    },
    ...props,
  };
  return <Upload {...uploadProps}>{props.children}</Upload>;
};

SmartUpload.defaultProps = {
  uploadProps: {},
};

SmartUpload.propTypes = {
  uploadProps: PropTypes.object,
};

export default SmartUpload;
