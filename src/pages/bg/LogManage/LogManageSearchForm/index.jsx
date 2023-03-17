import React from 'react';
import './style.less';
import SmartForm, { SearchForm } from '@/common/SmartForm';
import { SearchOutlined } from '@ant-design/icons';

const LogManageSearchForm = props => {
  const { messages } = props;
  console.log(' messages ： ', messages);

  const config = [
    {
      // formType: 'Select',
      itemProps: {
        label: messages.logManage.operator,
        name: 'params',
      },
      comProps: {
        className: 'formItem',
        placeholder: messages.logManage.operatorPh,
        suffix: <SearchOutlined className="searchIcon" />,
      },
    },
    {
      formType: 'RangePicker',
      itemProps: {
        label: messages.logManage.operatorTime,
        name: 'time',
      },
      comProps: {
        className: 'formItem',
      },
    },
  ];

  return <SearchForm config={config} locale="zh" {...props}></SearchForm>;
};

export default LogManageSearchForm;
