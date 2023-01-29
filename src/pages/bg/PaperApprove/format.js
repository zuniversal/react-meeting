import { formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  newData.opinionURL = formatFileRes(newData, 'opinionURLObj');
  const { opinionURLObj, ...restData } = newData;

  console.log(' restData ： ', newData, restData); //
  return restData;
};
