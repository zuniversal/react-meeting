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
import { setItem, removeItem, removeItems, tips, getToken } from '@/utils';
import { DOWNLOADS_URL } from '@/constants';
import { noUserActionRole } from '@/configs';
import { useSystemConfig } from '@/hooks/useSystemConfig';

// 1:对应管理员
// 4:对应审稿人
// 2、3、5:分别对应：论文通讯作者、论文共同作者、陪同人员
// 1 管理员 2 审稿人 3 投稿人
export default function users() {
  const { calledListMap, identityListMap } = useSystemConfig();
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
    if (res.code === 200) {
      // tips('注册成功！');
      history.push('/login');
    }
  }, []);

  const getUserInfoAsync = useCallback(async params => {
    if (!getToken()) {
      return;
    }
    const res = await getUserInfo({
      ...params,
      noTipsAll: true,
    });
    if (!res.data) {
      return;
    }

    const { head, callID, titleID } = res.data?.[0];
    console.log(' calledListMap ： ', calledListMap, callID); //
    res.data &&
      setUserInfo({
        ...res.data[0],
        headMap: DOWNLOADS_URL + head,
        isAdminApprover: noUserActionRole.includes(titleID),
        callMap: calledListMap[callID],
        titleIDMap: identityListMap[titleID],
      });
  }, []);

  const editUserInfoAsync = useCallback(async params => {
    const res = await editUserInfo(params);
    // setUserInfo(res.data[0])
    getUserInfoAsync();
  }, []);

  const logout = params => {
    console.log(' logout params ： ', params); //
    removeItems('userInfo');
    removeItem('token');
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
