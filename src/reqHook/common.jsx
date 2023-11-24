import useHttp from '@/hooks/useHttp';
import * as commonServices from '@/services/common';
import { arrMapObj } from '@/utils';

export const useHotelReqHook = props => {
  const { data: hotelList } = useHttp(commonServices.getHotelList, {
    format: data => {
      return data.map(v => ({
        ...v,
        label: v.hotelName,
        value: v.id,
      }));
    },
  });
  const hotelListMap = arrMapObj(hotelList);

  return {
    hotelList,
    hotelListMap,
  };
};
