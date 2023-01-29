import { useState, useCallback } from 'react';
import {
  getPaperApproverList,
  editPaperApprover,
} from '@/services/paperApprove';
import { getPaperList, addPaper } from '@/services/postPaper';

const formatItem = v => {};

export default function paperApprove() {
  const [postList, setPostList] = useState([]);

  const getPaperListAsync = useCallback(async params => {
    const res = await getPaperList(params);
    console.log(' getPaperList res await 结果  ：', res);
    setPostList(res.data);
    // setAction('fail')
  }, []);

  const [paperApproverList, setPaperApproverList] = useState([]);

  const getPaperApproverListAsync = useCallback(async params => {
    const res = await getPaperApproverList(params);
    setPaperApproverList(res.data);
  }, []);

  const editPaperApproverAsync = useCallback(async params => {
    const res = await editPaperApprover(params);
  }, []);

  return {
    postList,
    getPaperListAsync,
    paperApproverList,
    getPaperApproverListAsync,
    editPaperApproverAsync,
  };
}
