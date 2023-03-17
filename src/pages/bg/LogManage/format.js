import { formatRangePicker } from '@/utils/format';

export const formatSearchData = data => {
  const newData = {
    ...data,
  };

  if (newData.time) {
    const [startDay, endDay] = formatRangePicker(newData, 'time');
    newData.start = startDay;
    newData.end = endDay;
  }
  const { time, ...restData } = newData;

  return restData;
};
