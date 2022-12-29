import { useState, useCallback } from 'react';
import { getApproverList } from '@/services/paperDistribute';
import { formatSelectList } from '@/utils';

const formatItem = v => {
  // const arrivetime = moment(v.arrivetime);
  // const startDay = moment(v.startHotelBookDate);
  // const endDay = moment(v.endHotelBookDate);
  // const diffDay = endDay.diff(startDay, 'day') + 1;
  // return {
  //   ...v,
  //   arrivetime,
  //   // arrivetimeMap: arrivetime.format('YYYY-MM-DD'),
  //   arrivetimeMap: v.arrivetime,
  //   hotelBookDate: [startDay, endDay],
  //   // hotelBookDateMap: v.hotelBookDate,
  //   hotelBookDateMap:
  //     v.startHotelBookDate.split(' ')[0] +
  //     ' ' +
  //     v.endHotelBookDate.split(' ')[0],
  //   diffDay,
  //   isPayMap: paymentConfigMap[v.isPay],
  //   isGreetMap: ynRadioConfigMap[v.isGreet],
  //   hotelOrderPrice: v.hotelRoomNumber * v.price * diffDay,
  //   paymentResult: v.isPay ? 'Have paid' : 'Have not paid',
  // };
};

export default function paperDistribute() {
  const [approverList, setApproverList] = useState([]);
  // const joinApproverItem = ApproverList[0] ?? {};

  const getApproverListAsync = useCallback(async params => {
    const res = await getApproverList(params);
    setApproverList(formatSelectList(res.data));
    // setApproverList(res.data.map(formatItem));
  }, []);

  // const addJoinApproverAsync = useCallback(async params => {
  //   const res = await addJoinApprover(params);
  // }, []);

  return {
    approverList,
    getApproverListAsync,
    // addJoinApproverAsync,
  };
}
