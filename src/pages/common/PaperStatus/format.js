import { formatFileRes } from '@/utils/format';

export const formatData = data => {
  const newData = {
    ...data,
  };

  newData.paperURL = formatFileRes(newData, 'paperURLObj');

  const { paperURLObj, ...restData } = newData;
  console.log(' restData ： ', restData); //
  return restData;
};
