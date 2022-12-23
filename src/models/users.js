import { useState, useCallback } from 'react';
import { history } from 'umi';
import { login, regester, getUserInfo } from '@/services/user';
import { setItem, getItem, tips } from '@/utils';

export default function users() {
  const [userInfo, setUserInfo] = useState({});

  const loginAsync = useCallback(async params => {
    const res = await login(params);
    console.log(' loginAsync res await 结果  ：', res);
    setItem('token', res.token);
    if (res.code === 200) {
      history.push('/home');
    }
  }, []);

  const registerAsync = useCallback(async params => {
    const res = await regester(params);
    console.log(' registerAsync res await 结果  ：', res);
    // setItem(res.token)
    if (res.code === 200) {
      tips('注册成功！')
      history.push('/login');
    }
  }, []);

  const getUserInfoAsync = useCallback(async params => {
    const res = await getUserInfo(params);
    setUserInfo(res.data[0])
  }, []);

  return {
    userInfo,
    loginAsync,
    registerAsync,
    getUserInfoAsync,
  };
}
