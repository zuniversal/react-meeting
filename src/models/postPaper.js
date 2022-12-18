import { useState, useCallback } from 'react';
import { history } from 'umi';
import { login, regester, userCenter } from '@/services/user';
import { setItem, getItem } from '@/utils';

export default function postPaper() {
  const [isShowCommonModal, setIsShowCommonModal] = useState(false);
  // const [isShowCommonModal, setIsShowCommonModal] = useState(true);

  const postAsync = useCallback(async params => {
    const res = await login(params);
    console.log(' postAsync res await 结果  ：', res);
    setIsShowCommonModal(true);
  }, []);

  return {
    isShowCommonModal,
    setIsShowCommonModal,
    postAsync,
  };
}
