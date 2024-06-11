import React, { useState, useEffect } from 'react';
import useHttp from '@/hooks/useHttp';
import {
  getCalledList,
  getIdentityList,
  getPaperCateList,
  getAttendMethodList,
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

export const useAttendMethodListReq = props => {
  const { data: attendMethodList } = useHttp(() => getAttendMethodList());
  const attendMethodListMap = arrMapObj(attendMethodList, {
    label: 'amt',
  });
  console.log(
    ' attendMethodList ： ',
    attendMethodList,
    attendMethodListMap,
    props,
  ); //

  return {
    attendMethodList,
    attendMethodListMap,
  };
};

export const useAttendMethodList = (params = {}) => {
  const { param = {} } = params;
  const [attendMethodList, setAttendMethodList] = useState([]);
  const [attendMethodListMap, setAttendMethodListMap] = useState({});
  const [loading, setLoading] = useState(false);

  const getAttendMethodListAsync = async params => {
    setLoading(true);
    const { data } = await getAttendMethodList(params);
    console.log(' data数据 ： ', data);
    const formatData = data;
    console.log(' data ： ', data, formatData);
    setAttendMethodList(formatData);
    const formatDataMap = arrMapObj(formatData);
    // const formatDataMap = arrMapObj(formatData, {
    //   label: 'amt',
    // });
    setAttendMethodListMap(formatDataMap);
    setLoading(false);
  };

  useEffect(() => {
    console.log(' useEffectuseEffect ： ');
    getAttendMethodListAsync(param);
  }, []);

  return {
    loading,
    setLoading,
    attendMethodList,
    setAttendMethodList,
    attendMethodListMap,
    setAttendMethodListMap,
  };
};

export const useHotelList = (params = {}) => {
  const { param = {} } = params;
  const [hotelList, setHotelList] = useState([]);
  const [hotelListMap, setHotelListMap] = useState({});
  const [loading, setLoading] = useState(false);

  const getHotelListAsync = async params => {
    setLoading(true);
    const { data } = await getHotelList(params);
    console.log(' data数据 ： ', data);
    const formatData = formatSelectList(data, 'hotelName');
    console.log(' data ： ', data, formatData);
    setHotelList(formatData);
    const formatDataMap = arrMapObj(formatData);
    // const formatDataMap = arrMapObj(formatData, {
    //   label: 'amt',
    // });
    setHotelListMap(formatDataMap);
    setLoading(false);
  };

  useEffect(() => {
    console.log(' useEffectuseEffect ： ');
    getHotelListAsync(param);
  }, []);

  return {
    loading,
    setLoading,
    hotelList,
    setHotelList,
    hotelListMap,
    setHotelListMap,
  };
};
