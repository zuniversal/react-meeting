import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import { Button, Form } from 'antd';
import InfoCol from '@/pages/common/components/InfoCol';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import JoinMeetingForm from './JoinMeetingForm';
import { joinMeetingConfig } from './config';
import { formatData } from './format';

const JoinMeetingTips = props => {
  return (
    <div className="joinMeetingTips">
      {props.messages.joinMeeting.paymentTip}
    </div>
  );
};

const JoinMeeting = props => {
  const { messages } = useIntl();
  const {
    joinMeetingItem,
    joinMeetingList,
    getJoinMeetingListAsync,
    addJoinMeetingAsync,
  } = useModel('joinMeeting');
  console.log(' joinMeetingItem ： ', joinMeetingItem); //

  const [isNext, setIsNext] = useState(true);
  // const [isNext, setIsNext] = useState(false);
  const isPay = false;

  useEffect(() => {
    getJoinMeetingListAsync();
  }, []);

  const toggleIsNext = () => {
    // if (isNext) {
    //   getJoinMeetingListAsync()
    // }
    setIsNext(!isNext);
  };

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    // formatData(formProps.values)
    addJoinMeetingAsync(formatData(formProps.values));
    getJoinMeetingListAsync();
    setIsNext(!isNext);
  };

  const onFieldChange = params => {
    const {
      hotelRoomNumber = 0,
      price = 0,
      hotelBookDate = [],
    } = params.form.getFieldsValue();
    const [startDay, endDay] = hotelBookDate;
    const diffDay = endDay.diff(startDay, 'day') + 1;
    const hotelOrderPrice = hotelRoomNumber * price * diffDay;
    console.log(' hotelOrderPrice ： ', hotelOrderPrice, diffDay); //
    params.form.setFieldsValue({
      hotelOrderPrice,
    });
  };

  const joinMeetingCom = (
    <JoinMeetingForm
      messages={messages}
      init={joinMeetingItem}
      key={joinMeetingItem.arrivetime}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    >
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" className="bigBtn" htmlType="submit">
          {messages.nextStep}
        </Button>
        {/* <Button type="primary" onClick={toggleIsNext}>
          {messages.nextStep}
        </Button> */}
      </Form.Item>
    </JoinMeetingForm>
  );

  const config = joinMeetingConfig.map((v, i) =>
    i === 0
      ? {
          ...v,
          valCls: joinMeetingItem.isPay ? 'pay' : 'noPay',
        }
      : v,
  );
  console.log(' config ： ', config); //

  const paymentResult = (
    <div className="wrap1000">
      <InfoCol
        data={joinMeetingItem}
        messages={messages}
        msgKey={'joinMeeting'}
        config={config}
      ></InfoCol>
      <JoinMeetingTips messages={messages}></JoinMeetingTips>
      <Button type="primary" className="bigBtn" onClick={toggleIsNext}>
        {messages.previousStep}
      </Button>
    </div>
  );

  const titleKey = isNext ? 'title' : isPay ? 'paymentInfo' : 'paymentCost';

  return (
    <UserCenterWrapper
      messages={messages}
      className="joinMeeting"
      data={joinMeetingItem}
    >
      <div className="primaryTitle">{messages.joinMeeting[titleKey]}</div>
      {isNext ? joinMeetingCom : paymentResult}
    </UserCenterWrapper>
  );
};

export default JoinMeeting;
