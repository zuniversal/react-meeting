import { useState, useCallback } from 'react';
import { history } from 'umi';
import { getPaperList, addPaper } from '@/services/postPaper';
import { setItem, getItem } from '@/utils';

export default function postPaper() {
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
    const res = await addPaper(params);
    console.log(' addPostAsync res await 结果  ：', res);
    setIsShowCommonModal(true);
    // setAction(res.code === 200 ? 'succ' : 'fail');
    res.code !== 200 && setAction('fail');
  }, []);

  return {
    postList,
    isShowCommonModal,
    setIsShowCommonModal,
    getPaperListAsync,
    addPostAsync,
    action,
  };
}
