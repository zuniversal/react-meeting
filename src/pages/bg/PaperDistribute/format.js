import { formatDatePicker } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  // newData.endtime = formatDatePicker(newData, 'endtime');

  console.log(' newData ： ', newData); //
  return newData;
};
