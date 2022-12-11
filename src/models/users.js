import { useState, useCallback } from 'react';
import { history } from 'umi';
import { login, regester, userCenter } from '@/services/user';
import { setItem, getItem } from '@/utils';

export default function users() {
  const [userInfo, setUserInfo] = useState(null);

  const loginAsync = useCallback(async params => {
    console.log(' loginAsync params ： ', params);
    const res = await login(params);
    console.log(' loginAsync res await 结果  ：', res);
    // setItem(res.token)
    history.push('/home');
  }, []);

  return {
    userInfo,
    loginAsync,
  };
}
