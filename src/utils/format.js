import { NORMAL_CODE } from '@/utils/request';
import moment from 'moment';

export const formatFileRes = (data = {}, key = '') => {
  return data[key]?.file.response.code === NORMAL_CODE
    ? data[key]?.file.response.data
    : '';
};

export const formatDatePicker = (data = {}, key = '') => {
  const res = moment(data[key]).format('YYYY-MM-DD HH:mm:ss');
  console.log('  res ：', res); //
  return res;
};

export const formatRangePicker = (data = {}, key = '') => {
  const [startDay, endDay] = data[key];
  const startDayStr = moment(startDay).format('YYYY-MM-DD');
  const endDayStr = moment(endDay).format('YYYY-MM-DD');
  const res = startDayStr + ' ' + endDayStr;
  console.log('  res ：', res); //
  return [startDayStr, endDayStr];
};
