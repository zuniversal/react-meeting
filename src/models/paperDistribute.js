import { useState, useCallback } from 'react';
import { getApproverList } from '@/services/paperDistribute';
import {
  getPaperDistributeList,
  addPaperDistribute,
  editPaperDistribute,
} from '@/services/paperDistribute';
import { formatSelectList } from '@/utils';
import { useModal } from '@/hooks/useModal';

const formatItem = v => {
  return {
    ...v,
    reviewerList: JSON.parse(v.reviewerList),
  };
};

export default function paperDistribute() {
  const { closeCommonModal, ...rest } = useModal();

  const [approverList, setApproverList] = useState([]);
  const [paperDistributeList, setPaperDistributeList] = useState([]);

  const getApproverListAsync = useCallback(async params => {
    const res = await getApproverList(params);
    // setApproverList(res.data.map(formatItem));
    setApproverList(formatSelectList(res.data, 'name'));
  }, []);

  const getPaperDistributeListAsync = useCallback(async params => {
    const res = await getPaperDistributeList(params);
    setPaperDistributeList(res.data.map(formatItem));
  }, []);

  const addPaperDistributeAsync = useCallback(async params => {
    const res = await addPaperDistribute(params);
  }, []);

  const editPaperDistributeAsync = useCallback(async params => {
    const res = await editPaperDistribute(params);
    closeCommonModal();
    return res;
  }, []);

  return {
    approverList,
    getApproverListAsync,
    paperDistributeList,
    getPaperDistributeListAsync,
    addPaperDistributeAsync,
    editPaperDistributeAsync,
    ...rest,
  };
}
