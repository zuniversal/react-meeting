import { useState, useCallback } from 'react';
import { getJoinMeetingList, addJoinMeeting } from '@/services/user';
import { ynRadioConfigMap, paymentConfigMap } from '@/configs';
import moment from 'moment';

const formatItem = v => {
  // const [startDay, endDay] = v.hotelBookDate.split(' ')
  // const [startDayStr, endDayStr] = "2022-12-23 2022-12-30".split(' ')
  // const startDay = moment(startDayStr)
  // const endDay = moment(endDayStr)
  const arrivetime = moment(v.arrivetime);
  const startDay = moment(v.startHotelBookDate);
  const endDay = moment(v.endHotelBookDate);
  const diffDay = endDay.diff(startDay, 'day') + 1;
  return {
    ...v,
    arrivetime,
    // arrivetimeMap: arrivetime.format('YYYY-MM-DD'),
    arrivetimeMap: v.arrivetime,
    hotelBookDate: [startDay, endDay],
    // hotelBookDateMap: v.hotelBookDate,
    hotelBookDateMap:
      v.startHotelBookDate.split(' ')[0] +
      ' ' +
      v.endHotelBookDate.split(' ')[0],
    diffDay,
    isPayMap: paymentConfigMap[v.isPay],
    isGreetMap: ynRadioConfigMap[v.isGreet],
    hotelOrderPrice: v.hotelRoomNumber * v.price * diffDay,
    paymentResult: v.isPay ? 'Have paid' : 'Have not paid',
  };
};

export default function joinMeeting() {
  const [joinMeetingList, setJoinMeetingList] = useState([]);
  const joinMeetingItem = joinMeetingList[0] ?? {};

  const getJoinMeetingListAsync = useCallback(async params => {
    const res = await getJoinMeetingList(params);
    if (res.data) {
      setJoinMeetingList(res.data.map(formatItem));
    }
  }, []);

  const addJoinMeetingAsync = useCallback(async params => {
    const res = await addJoinMeeting(params);
  }, []);

  return {
    joinMeetingItem: {
      ...joinMeetingList[0],
    },
    joinMeetingList,
    getJoinMeetingListAsync,
    addJoinMeetingAsync,
  };
}
