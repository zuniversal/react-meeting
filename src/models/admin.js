import { useState, useCallback } from 'react';
import {
  getAdminHomeCount,
  getJoinCountList,
  getRegisterCountList,
} from '@/services/admin';

export default function paperDistribute() {
  const [adminHomeCount, setAdminHomeCount] = useState([]);

  const getAdminHomeCountAsync = useCallback(async params => {
    const res = await getAdminHomeCount(params);
    setAdminHomeCount({
      ...res.data,
      paperSum: `${res.data.abstractSum}/${res.data.paperSum}`,
    });
  }, []);

  const [joinCountList, setJoinCountList] = useState([]);

  const getJoinCountListAsync = useCallback(async params => {
    const res = await getJoinCountList(params);
    setJoinCountList(res.data);
  }, []);

  const [registerCountList, setRegisterCountList] = useState([]);
  const [registerCountTotal, setRegisterCountTotal] = useState(0);

  const getRegisterCountListAsync = useCallback(async params => {
    const res = await getRegisterCountList(params);
    setRegisterCountList(res.data);
    setRegisterCountTotal(res.total);
  }, []);

  return {
    adminHomeCount,
    getAdminHomeCountAsync,
    joinCountList,
    getJoinCountListAsync,
    registerCountTotal,
    registerCountList,
    getRegisterCountListAsync,
  };
}
