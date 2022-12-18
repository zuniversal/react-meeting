import React from 'react';
import './style.less';
import { Input } from 'antd';
import { ynRadioConfig } from '@/configs';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';

const JoinMeetingForm = props => {
  const { messages } = props;

  const uploadPdf = () => {
    console.log(' uploadPdf   ,   ： ');
  };

  const config = [
    {
      itemProps: {
        label: messages.joinMeeting.airplane,
        name: 'airplane',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'DatePicker',
      itemProps: {
        label: messages.joinMeeting.arriveTime,
        name: 'arriveTime',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'Radio',
      itemProps: {
        label: messages.joinMeeting.isNeedPick,
        name: 'isNeedPick',
        className: 'radioFormItem',
      },
      comProps: {
        options: ynRadioConfig,
      },
    },
    {
      itemProps: {
        label: messages.joinMeeting.hotelName,
        name: 'hotelName',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.joinMeeting.hotelPrice,
        name: 'hotelPrice',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.joinMeeting.hotelOrderNum,
        name: 'hotelOrderNum',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'DatePicker',
      itemProps: {
        label: messages.joinMeeting.hotelOrderDay,
        name: 'hotelOrderDay',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.joinMeeting.hotelOrderPrice,
        name: 'hotelOrderPrice',
      },
      comProps: {
        className: 'formItem',
      },
    },
  ];

  return (
    <SmartForm
      className={`dcForm`}
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default JoinMeetingForm;
