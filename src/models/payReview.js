import { useState, useCallback } from 'react';
import { getPayReviewList, editPayReview } from '@/services/payReview';
import { identityConfigMap } from '@/configs';

const formatItem = v => {
  return {
    ...v,
    isPayMap: v.isPay ? '是' : '否',
    identityMap: identityConfigMap[v.title],
  };
};

export default function paperDistribute() {
  const [payReviewList, setPayReviewList] = useState([]);

  const getPayReviewListAsync = useCallback(async params => {
    const res = await getPayReviewList(params);
    setPayReviewList(res.data?.map(formatItem));
  }, []);

  const editPayReviewAsync = useCallback(async params => {
    const res = await editPayReview(params);
    getPayReviewListAsync();
  }, []);

  return {
    payReviewList,
    getPayReviewListAsync,
    editPayReviewAsync,
  };
}
