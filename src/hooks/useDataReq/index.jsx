import React from 'react';
import useHttp from '@/hooks/useHttp';
import {
  getCalledList,
  getIdentityList,
  getPaperCateList,
  getHotelList,
} from '@/services/common';
import { arrMapObj, formatSelectList } from '@/utils';

export const usePaperTypeReq = props => {
  const { data: paperTypeList } = useHttp(
    () => getPaperCateList({ page: 1, per_page: 20 }),
    {
      format: res => formatSelectList(res, 'paperCateName'),
    },
  );
  const paperTypeListMap = arrMapObj(paperTypeList, {
    key: 'id',
    label: 'paperCateName',
  });
  console.log(' paperTypeList ： ', paperTypeList, paperTypeListMap, props); //

  return {
    paperTypeList,
    paperTypeListMap,
  };
};
