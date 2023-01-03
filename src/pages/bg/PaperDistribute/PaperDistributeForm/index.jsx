import React from 'react';
import SmartForm from '@/common/SmartForm';
import { approveConfig } from '../config';
import InfoDesc from '@/pages/common/components/InfoDesc';

const PaperDistributeForm = props => {
  const { messages } = props;

  const config = [
    <InfoDesc
      key={'infoDesc'}
      data={props.itemDetail}
      messages={messages}
      msgKey={'paperApprove'}
      config={approveConfig}
    ></InfoDesc>,
    // {
    //   formType: 'DatePicker',
    //   itemProps: {
    //     label: messages.paperDistribute.endTime,
    //     name: 'endtime',
    //   },
    //   comProps: {
    //     className: 'formItem',
    //     showTime: true,
    //   },
    // },
    {
      formType: 'TextArea',
      itemProps: {
        label: messages.paperDistribute.advise,
        name: 'opinion',
      },
      comProps: {
        className: 'formItem',
        autoSize: {
          minRows: 10,
          // maxRows: 5
        },
      },
    },
  ];

  return (
    <SmartForm
      layout={'vertical'}
      noLabelLayout
      config={config}
      locale="zh"
      {...props}
    ></SmartForm>
  );
};

export default PaperDistributeForm;
