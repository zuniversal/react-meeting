import React, { useEffect } from 'react';
import { useModel } from 'umi';
import { arrMapObj } from '@/utils';

export const useSystemConfig = props => {
  const {
    calledList,
    identityList,
    getCalledListAsync,
    getIdentityListAsync,
  } = useModel('systemConfig');

  useEffect(() => {
    getCalledListAsync();
    getIdentityListAsync();
  }, []);

  return {
    calledListMap: arrMapObj(calledList, { label: 'callName', key: 'id' }),
    identityListMap: arrMapObj(identityList, { label: 'titleName', key: 'id' }),
  };
};
