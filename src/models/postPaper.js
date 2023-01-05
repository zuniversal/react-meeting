import { useState, useCallback } from 'react';
import { history } from 'umi';
import { getPaperList, addPaper, removePaper } from '@/services/postPaper';
import { setItem, getItem } from '@/utils';

export default function postPaper() {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowCommonModal, setIsShowCommonModal] = useState(false);
  // const [isShowCommonModal, setIsShowCommonModal] = useState(true);

  const [action, setAction] = useState('succ');

  const [postList, setPostList] = useState([]);

  const getPaperListAsync = useCallback(async params => {
    const res = await getPaperList(params);
    console.log(' getPaperList res await 结果  ：', res);
    setPostList(res.data);
    // setAction('fail')
  }, []);

  const addPostAsync = useCallback(async params => {
    setIsLoading(true);
    const res = await addPaper(params);
    setIsLoading(false);
    console.log(' addPostAsync res await 结果  ：', res);
    setIsShowCommonModal(true);
    // setAction(res.code === 200 ? 'succ' : 'fail');
    setAction(res.code == 200 ? 'succ' : 'fail');
    return res;
  }, []);

  const removePaperAsync = useCallback(async params => {
    const res = await removePaper(params);
    getPaperListAsync();
  }, []);

  return {
    postList,
    isShowCommonModal,
    setIsShowCommonModal,
    getPaperListAsync,
    addPostAsync,
    removePaperAsync,
    action,
    isLoading,
  };
}
