import React, { useEffect } from 'react';
import { useModel } from 'umi';
import { arrMapObj } from '@/utils';
import { usePaperTypeReq } from '@/hooks/useDataReq';
import * as useDataReq from '@/hooks/useDataReq';

export const useSystemConfig = props => {
  const {
    calledList,
    identityList,
    getCalledListAsync,
    getIdentityListAsync,
  } = useModel('systemConfig');

  const { paperTypeListMap } = usePaperTypeReq();
  // const {
  //   attendMethodList,
  //   attendMethodListMap,
  // } = useDataReq.useAttendMethodListReq();
  const {
    attendMethodList,
    setAttendMethodList,
    attendMethodListMap,
    setAttendMethodListMap,
  } = useDataReq.useAttendMethodList();

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
    attendMethodList,
    setAttendMethodList,
    attendMethodListMap,
    setAttendMethodListMap,
  };
};
