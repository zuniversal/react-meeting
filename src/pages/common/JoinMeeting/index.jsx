import React, { useEffect, useState } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import { Button, Form } from 'antd';
import InfoCol from '@/pages/common/components/InfoCol';
import UserCenterWrapper from '@/pages/common/components/UserCenterWrapper';
import Download from '@/components/Widgets/Download';
import JoinMeetingForm from './JoinMeetingForm';
import { joinMeetingConfig } from './config';
import { formatData } from './format';
import useHttp from '@/hooks/useHttp';
import { getHotelList } from '@/services/common';
import * as payApi from '@/services/pay';
import { attendMethodConfigMap } from '@/configs';
import { arrMapObj, setItem } from '@/utils';
import { useHotelReqHook } from '@/reqHook/common';
import SmartUpload from '@/components/Widgets/SmartUpload';

const JoinMeetingTips = props => {
  const { info } = props; //
  return (
    <div className="joinMeetingTips">
      {/* {props.messages.joinMeeting.paymentTip} */}
      {/* Total payment is RMB {info.hotelOrderPrice}, */}
      <div>Early registration:RMB4000,Students: RMB 2000</div>
      <div>Late registration :RMB4800,Students: RMB 2400</div>
      <div>(After 30 July 2024)</div>
      <div>Accompanying Person:RMB1200</div>
      <div>RMB 2000 for online</div>
      {/* please transfer accounts to {info.total} bank：585221474511，payee：
      {info.total} */}
    </div>
  );
};

const JoinMeeting = props => {
  const { messages } = useIntl();
  const { userInfo } = useModel('users');
  const {
    joinMeetingItem,
    joinMeetingList,
    getJoinMeetingListAsync,
    addJoinMeetingAsync,
    updateAttendMethodAsync,
  } = useModel('joinMeeting');
  console.log(' joinMeetingItem ： ', joinMeetingItem); //

  const [isNext, setIsNext] = useState(true);
  // const [isNext, setIsNext] = useState(false);
  const isPay = false;

  // const { data: hotelList } = useHttp(getHotelList, {
  //   format: data => {
  //     return data.map(v => ({
  //       ...v,
  //       label: v.hotelName,
  //       value: v.id,
  //     }));
  //   },
  // });
  // const hotelListMap = arrMapObj(hotelList);
  const { hotelListMap } = useHotelReqHook();
  console.log(' hotelListMap ： ', hotelListMap);
  const joinMeetingData = {
    ...joinMeetingItem,
    hotelName: hotelListMap?.[joinMeetingItem.hotelName],
  };

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
    updateAttendMethodAsync({
      attendMethod: formProps.values.attendMethod,
    });
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
    // const hotelOrderPrice = hotelRoomNumber * price * diffDay;
    // console.log(' hotelOrderPrice ： ', hotelOrderPrice, diffDay); //
    // params.form.setFieldsValue({
    //   hotelOrderPrice,
    // });
  };

  const generate = async params => {
    console.log(' generate , ： ', params, joinMeetingItem);
    const attendMethodMoney =
      attendMethodConfigMap[joinMeetingItem.attendMethod];
    console.log(' attendMethodMoney ： ', attendMethodMoney);
    if (attendMethodMoney) {
      const res = await payApi.generate({
        amt: attendMethodMoney * 100,
        baseURL: '/java',
        ...params,
      });
      console.log('  res await 结果  ：', res);
      setItem('form', res.data.form, true);
      const url = `/#/pay?outTradeNo=${res.data.outTradeNo}`;
      console.log(' url ： ', url);
      window.open(url);
    }
  };
  // const overseasPay = async () => {
  //   console.log(' overseasPay , ： ');
  // };
  // const domesticPay = async () => {
  //   console.log(' domesticPay , ： ');
  // };

  const payBtn = (
    <div className="payWrapper">
      <Button
        type="primary"
        className="bigBtn"
        onClick={() =>
          generate({
            type: 1,
          })
        }
      >
        {messages.overseasPay}
      </Button>
      <Button
        type="primary"
        className="bigBtn"
        onClick={() =>
          generate({
            type: 2,
          })
        }
      >
        {messages.domesticPay}
      </Button>
    </div>
  );

  const joinMeetingCom = (
    <JoinMeetingForm
      messages={messages}
      init={joinMeetingItem}
      key={joinMeetingItem.arrivetime}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    >
      <Form.Item className={`btnFormItem`} noStyle>
        <div className="fsb">
          <Button type="primary" className="bigBtn" htmlType="submit">
            {messages.nextStep}
          </Button>
        </div>
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
          valCls: joinMeetingData.isPay ? 'pay' : 'noPay',
        }
      : v,
  );
  console.log(' config ： ', config); //

  const paymentResult = (
    <div className="wrap1000">
      <InfoCol
        data={joinMeetingData}
        messages={messages}
        msgKey={'joinMeeting'}
        config={config}
      ></InfoCol>
      <JoinMeetingTips
        info={joinMeetingData}
        messages={messages}
      ></JoinMeetingTips>
      <div className="fsb">
        <Button type="primary" className="bigBtn" onClick={toggleIsNext}>
          {messages.previousStep}
        </Button>

        {payBtn}
      </div>
    </div>
  );

  const titleKey = isNext ? 'title' : isPay ? 'paymentInfo' : 'paymentCost';

  const uploadProps = {
    // finish: e => props.uploadReceipt(e, record),
    accept: 'image/png,image/jpeg',
  };

  return (
    <UserCenterWrapper
      messages={messages}
      className="joinMeeting"
      data={joinMeetingItem}
    >
      <div className="titleWrapper">
        <div className="primaryTitle">{messages.joinMeeting[titleKey]}</div>
        <div className={`actionBtnWrapper`}>
          <SmartUpload {...uploadProps}>
            <a className="rawLink">{messages.userCenter.uploadReceipt}</a>
          </SmartUpload>
          {!userInfo.isAdminApprover && (
            <Download url={joinMeetingItem.payPhotographUrl}>
              {messages.userCenter.downReceipt}
            </Download>
          )}
        </div>
      </div>
      {isNext ? joinMeetingCom : paymentResult}
    </UserCenterWrapper>
  );
};

export default JoinMeeting;
