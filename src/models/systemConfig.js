import { useState, useCallback } from 'react';
import { history } from 'umi';
import { login, regester, userCenter } from '@/services/user';
import { setItem, getItem } from '@/utils';

export default function systemConfig() {
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
  };
}
