import React, { useState } from 'react';
import './style.less';
import { useIntl } from 'umi';
import { Button, Form } from 'antd';
import InfoCol from '@/pages/common/components/InfoCol';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import JoinMeetingForm from './JoinMeetingForm';
import { joinMeetingConfig } from './config';

const JoinMeetingTips = props => {
  return (
    <div className="joinMeetingTips">
      {props.messages.joinMeeting.paymentTip}
    </div>
  );
};

const JoinMeeting = props => {
  const { messages } = useIntl();

  // const [ isNext, setIsNext ] = useState(true)
  const [isNext, setIsNext] = useState(false);
  const isPay = false;

  const toggleIsNext = () => {
    setIsNext(!isNext);
  };

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
  };

  const joinMeetingCom = (
    <JoinMeetingForm messages={messages}>
      <Form.Item className={`btnFormItem`} noStyle>
        {/* <Button type="primary" htmlType="submit" >
        {messages.nextStep}
      </Button> */}
        <Button type="primary" onClick={toggleIsNext}>
          {messages.nextStep}
        </Button>
      </Form.Item>
    </JoinMeetingForm>
  );

  const config = joinMeetingConfig.map((v, i) =>
    i === 0 ? { ...v, valCls: isPay ? 'pay' : 'noPay' } : v,
  );
  console.log(' config ： ', config); //

  const paymentResult = (
    <div className="wrap1000">
      <InfoCol
        messages={messages}
        msgKey={'joinMeeting'}
        config={config}
      ></InfoCol>
      <JoinMeetingTips messages={messages}></JoinMeetingTips>
      <Button type="primary" onClick={toggleIsNext}>
        {messages.previousStep}
      </Button>
    </div>
  );

  const titleKey = isNext ? 'title' : isPay ? 'paymentInfo' : 'paymentCost';

  return (
    <UserCenterWrapper messages={messages} className="joinMeeting">
      <div className="primaryTitle">{messages.joinMeeting[titleKey]}</div>
      {isNext ? joinMeetingCom : paymentResult}
    </UserCenterWrapper>
  );
};

export default JoinMeeting;
