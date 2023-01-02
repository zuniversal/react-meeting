import { useState, useCallback } from 'react';
import { history } from 'umi';
import {
  getCalledList,
  getIdentityList,
  getHotelList,
} from '@/services/common';
import { login, regester, userCenter } from '@/services/user';
import { setItem, getItem } from '@/utils';
import { calledConfig, identityConfig } from '@/configs';

const initActiveKey = window.location.hash.split('#')[1];

export default function systemConfig() {
  const [activeKey, setActiveKey] = useState(initActiveKey);
  const [calledList, setCalledList] = useState(calledConfig);
  const [identityList, setIdentityList] = useState(identityConfig);
  const [hotelList, setHotelList] = useState([]);

  const getCalledListAsync = useCallback(async params => {
    // setCalledList((await getCalledList(params)).data);
  }, []);
  const getIdentityListAsync = useCallback(async params => {
    // setIdentityList((await getIdentityList(params)).data);
  }, []);
  const getHotelListAsync = useCallback(async params => {
    setHotelList((await getHotelList(params)).data);
  }, []);
  // const getCalledListAsync = useCallback(async params => {
  //   const res = await getCalledList(params)
  //   console.log(' res ： ', res,  )//
  //   // setCalledList(res.data);
  // }, []);
  // const getIdentityListAsync = useCallback(async params => {
  //   const res = await getIdentityList(params)
  //   console.log(' res ： ', res,  )//
  //   // setCalledList(res.data);
  // }, []);

  const [userInfo, setUserInfo] = useState(null);

  const loginAsync = useCallback(async params => {
    const res = await login(params);
    console.log(' loginAsync res await 结果  ：', res);
    // setItem(res.token)
    if (res.code === 200) {
      history.push('/home');
    }
  }, []);

  const registerAsync = useCallback(async params => {
    const res = await regester(params);
    console.log(' registerAsync res await 结果  ：', res);
    // setItem(res.token)
    if (res.code === 200) {
      history.push('/login');
    }
  }, []);

  const goAndSetkey = params => {
    console.log(' goAndSetkey params ： ', params); //
    setActiveKey(params);
    history.push(params);
  };

  return {
    activeKey,
    setActiveKey,
    userInfo,
    loginAsync,
    registerAsync,
    calledList,
    identityList,
    hotelList,
    getCalledListAsync,
    getIdentityListAsync,
    getHotelListAsync,
    goAndSetkey,
  };
}
