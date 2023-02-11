import React, { useEffect } from 'react';
import { useModel } from 'umi';
import { arrMapObj } from '@/utils';
import { usePaperTypeReq } from '@/hooks/useDataReq';

export const useSystemConfig = props => {
  const {
    calledList,
    identityList,
    getCalledListAsync,
    getIdentityListAsync,
  } = useModel('systemConfig');

  const { paperTypeListMap } = usePaperTypeReq();
  useEffect(() => {
    getCalledListAsync();
    getIdentityListAsync();
  }, []);

  return {
    // calledListMap: arrMapObj(calledList, { label: 'callName', key: 'id' }),
    // identityListMap: arrMapObj(identityList, { label: 'titleName', key: 'id' }),
    calledListMap: arrMapObj(calledList),
    identityListMap: arrMapObj(identityList),
    paperTypeListMap,
  };
};
