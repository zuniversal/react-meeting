import { useState, useCallback } from 'react';
import { history } from 'umi';
import {
  login,
  regester,
  forgetPwd,
  setPwd,
  getUserInfo,
  editUserInfo,
} from '@/services/user';
import { setItem, removeItems, tips } from '@/utils';
import { DOWNLOADS_URL } from '@/constants';

// 1:对应管理员
// 4:对应审稿人
// 2、3、5:分别对应：论文通讯作者、论文共同作者、陪同人员

export default function users() {
  const [userInfo, setUserInfo] = useState({});

  const loginAsync = useCallback(async params => {
    const res = await login(params);
    console.log(' loginAsync res await 结果  ：', res);
    const { token, code, role } = res;

    setItem('token', token);
    if (code === 200) {
      const { isReviewer, isBgPlatform } = params;
      let path = '/home';
      if (role == 2) {
        path = '/paperApprove';
      } else if (role == 1) {
        path = '/adminHome';
      }
      history.push(path);
      // history.push(isReviewer ? '/adminHome' : '/home');
    }
  }, []);

  const registerAsync = useCallback(async params => {
    const res = await regester(params);
    console.log(' registerAsync res await 结果  ：', res);
    // setItem(res.token)
    if (res.code === 200) {
      // tips('注册成功！');
      history.push('/login');
    }
  }, []);

  const forgetPwdAsync = useCallback(async params => {
    const res = await forgetPwd(params);
    console.log(' forgetPwdAsync res await 结果  ：', res);
  }, []);

  const setPwdAsync = useCallback(async params => {
    const res = await setPwd(params);
    console.log(' setPwdAsync res await 结果  ：', res);
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
        noTipsAll: true,
      });
  }, []);

  const logout = params => {
    console.log(' logout params ： ', params); //
    removeItems('userInfo');
    removeItems('token');
    setUserInfo({});
    history.push(params);
  };

  return {
    userInfo,
    loginAsync,
    registerAsync,
    forgetPwdAsync,
    setPwdAsync,
    getUserInfoAsync,
    editUserInfoAsync,
    logout,
  };
}
