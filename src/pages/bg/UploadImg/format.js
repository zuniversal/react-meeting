import { formatDatePicker, formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  newData.time = formatDatePicker(newData, 'time');
  newData.url = formatFileRes(newData, 'urlObj');

  const { urlObj, ...restData } = newData;
  console.log(' restData ： ', restData); //
  return restData;
};
