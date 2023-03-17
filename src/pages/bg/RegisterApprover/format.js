import { formatDatePicker, formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  newData.callID = 2;
  newData.country = null;
  newData.phone = null;
  newData.unitName = null;
  newData.unitAddress = null;

  return newData;
};
