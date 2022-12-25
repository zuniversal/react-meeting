import { useState, useCallback } from 'react';
import { history } from 'umi';
import { login, regester, getUserInfo, editUserInfo } from '@/services/user';
import { setItem, removeItems, tips } from '@/utils';
import { DOWNLOADS_URL } from '@/constants';

export default function users() {
  const [userInfo, setUserInfo] = useState({});

  const loginAsync = useCallback(async params => {
    const res = await login(params);
    console.log(' loginAsync res await 结果  ：', res);
    setItem('token', res.token);
    if (res.code === 200) {
      const { isReviewer } = params;
      history.push(isReviewer ? '/adminHome' : '/home');
    }
  }, []);

  const registerAsync = useCallback(async params => {
    const res = await regester(params);
    console.log(' registerAsync res await 结果  ：', res);
    // setItem(res.token)
    if (res.code === 200) {
      tips('注册成功！');
      history.push('/login');
    }
  }, []);

  const editUserInfoAsync = useCallback(async params => {
    const res = await editUserInfo(params);
    // setUserInfo(res.data[0])
  }, []);

  const getUserInfoAsync = useCallback(async params => {
    const res = await getUserInfo(params);
    res.data &&
      setUserInfo({
        ...res.data[0],
        headMap: DOWNLOADS_URL + res.data[0].head,
      });
  }, []);

  const logout = params => {
    removeItems('userInfo');
    removeItems('token');
    setUserInfo({});
    history.push(`/login`);
  };

  return {
    userInfo,
    loginAsync,
    registerAsync,
    getUserInfoAsync,
    editUserInfoAsync,
    logout,
  };
}
