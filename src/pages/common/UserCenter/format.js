import { formatDatePicker, formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  newData.head = formatFileRes(newData, 'headObj');
  newData.time = formatDatePicker(newData, 'time');

  const { headObj, ...restData } = newData;
  console.log(' restData ： ', restData); //
  return restData;
};
