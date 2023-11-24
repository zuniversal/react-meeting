import { formatDatePicker, formatRangePicker } from '@/utils/format';

export const formatData = data => {
  console.log(' formatData ： ', data); //
  const newData = {
    price: 10,
    hotelOrderPrice: 10,
    ...data,
  };

  newData.arrivetime = formatDatePicker(newData, 'arrivetime');
  const [startDay, endDay] = formatRangePicker(newData, 'hotelBookDate');
  newData.startHotelBookDate = startDay;
  newData.endHotelBookDate = endDay;

  console.log(' newData ： ', newData); //
  return newData;
};
