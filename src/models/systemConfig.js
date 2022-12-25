import { useState, useCallback } from 'react';
import { history } from 'umi';
import { getCalledList, getIdentityList } from '@/services/common';
import { login, regester, userCenter } from '@/services/user';
import { setItem, getItem } from '@/utils';

export default function systemConfig() {
  const [calledList, setCalledList] = useState([]);
  const [identityList, setIdentityList] = useState([]);

  const getCalledListAsync = useCallback(async params => {
    setCalledList((await getCalledList(params)).data);
  }, []);
  const getIdentityListAsync = useCallback(async params => {
    setIdentityList((await getIdentityList(params)).data);
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

  return {
    userInfo,
    loginAsync,
    registerAsync,
    calledList,
    identityList,
    getCalledListAsync,
    getIdentityListAsync,
  };
}
