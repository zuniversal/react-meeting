import { useState, useCallback } from 'react';
import {
  getPaperApproverList,
  editPaperApprover,
} from '@/services/paperApprove';

const formatItem = v => {};

export default function paperDistribute() {
  const [paperApproverList, setPaperApproverList] = useState([]);

  const getPaperApproverListAsync = useCallback(async params => {
    const res = await getPaperApproverList(params);
    setPaperApproverList(res.data);
  }, []);

  const editJoinApproverAsync = useCallback(async params => {
    const res = await editPaperApprover(params);
  }, []);

  return {
    paperApproverList,
    getPaperApproverListAsync,
    editJoinApproverAsync,
  };
}
