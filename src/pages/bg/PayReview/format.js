import { formatDatePicker, formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  newData.payPhotographUrl = formatFileRes(newData, 'payPhotographUrl');

  console.log(' newData ： ', newData); //
  return newData;
};
