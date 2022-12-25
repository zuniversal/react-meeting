import React from 'react';
import './style.less';
import PropTypes from 'prop-types';
import { Upload } from 'antd';
import { UPLOADFILE_URL } from '@/constants';
import { getToken } from '@/utils';

const SmartUpload = props => {
  const uploadProps = {
    name: 'file',
    className: 'smartUpload',
    action: UPLOADFILE_URL,
    headers: {
      token: getToken(),
    },
    onChange(info) {
      console.log(' onChange ： ', info); //
    },
    ...props.uploadProps,
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
