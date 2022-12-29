import { useState, useCallback } from 'react';
import { getAdminHomeCount } from '@/services/admin';

export default function paperDistribute() {
  const [adminHomeCount, setAdminHomeCount] = useState([]);

  const getAdminHomeCountAsync = useCallback(async params => {
    const res = await getAdminHomeCount(params);
    setAdminHomeCount({
      ...res.data,
      paperSum: `${res.data.abstractSum}/${res.data.paperSum}`,
    });
  }, []);

  return {
    adminHomeCount,
    getAdminHomeCountAsync,
  };
}
