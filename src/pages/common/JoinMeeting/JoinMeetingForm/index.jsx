import React from 'react';
import './style.less';
import { Form } from 'antd';
import { ynRadioConfig } from '@/configs';
import SmartForm from '@/common/SmartForm';
import UploadCom from '@/components/Widgets/UploadCom';
import { useCalledForm, useHotelForm } from '@/hooks/useFormItem';

const JoinMeetingForm = props => {
  console.log(' JoinMeetingForm ： ', props); //
  const [form] = Form.useForm();
  const calledForm = useCalledForm(props);
  const hotelForm = useHotelForm(props);
  // const { comProps : { options: hotelList},  } = hotelForm
  const hotelList = hotelForm.comProps.options;
  const onHotelChange = (val, selectItem) => {
    console.log(' onHotelChange   ,   ： ', val, selectItem);
    form.setFieldsValue({
      price: selectItem.price,
    });
  };
  hotelForm.comProps.onChange = onHotelChange;
  console.log(' hotelList ： ', hotelForm, hotelList); //

  const { messages } = props;

  const uploadPdf = () => {
    console.log(' uploadPdf   ,   ： ');
  };

  const config = [
    {
      itemProps: {
        label: messages.joinMeeting.airplane,
        name: 'flight',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'DatePicker',
      itemProps: {
        label: messages.joinMeeting.arriveTime,
        name: 'arrivetime',
      },
      comProps: {
        className: 'formItem',
        showTime: true,
      },
    },
    {
      formType: 'Radio',
      itemProps: {
        label: messages.joinMeeting.isNeedPick,
        name: 'isGreet',
        className: 'radioFormItem',
      },
      comProps: {
        options: ynRadioConfig,
      },
    },
    hotelForm,
    // {
    //   itemProps: {
    //     label: messages.joinMeeting.hotelName,
    //     name: 'hotelName',
    //   },
    //   comProps: {
    //     className: 'formItem',
    //   },
    // },
    {
      formType: 'InputNumber',
      itemProps: {
        label: messages.joinMeeting.hotelPrice,
        name: 'price',
      },
      comProps: {
        className: 'formItem',
        min: 0,
        disabled: true,
      },
    },
    {
      formType: 'InputNumber',
      itemProps: {
        label: messages.joinMeeting.hotelOrderNum,
        name: 'hotelRoomNumber',
      },
      comProps: {
        className: 'formItem',
        min: 0,
      },
    },
    {
      formType: 'RangePicker',
      itemProps: {
        label: messages.joinMeeting.hotelOrderDay,
        name: 'hotelBookDate',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'InputNumber',
      itemProps: {
        label: messages.joinMeeting.hotelOrderPrice,
        name: 'hotelOrderPrice',
      },
      comProps: {
        className: 'formItem',
        disabled: true,
      },
    },
  ];

  return (
    <SmartForm
      className={`dcForm`}
      layout={'vertical'}
      noLabelLayout
      config={config}
      propsForm={form}
      {...props}
      noPh
    ></SmartForm>
  );
};

export default JoinMeetingForm;
