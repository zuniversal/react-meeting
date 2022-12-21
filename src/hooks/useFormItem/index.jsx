import React from 'react';
import useHttp from '@/hooks/useHttp';
import { getCalled, getIdentity, getUserInfo } from '@/services/common';

export const useCalledForm = props => {
  const { messages } = props;

  const { data: calledList } = useHttp(getCalled, {
    format: data =>
      data.map(v => ({
        label: v.callName,
        value: v.id,
      })),
  });
  console.log(' calledList ： ', calledList, props); //

  return {
    formType: 'Radio',
    itemProps: {
      label: messages.register.name,
      name: 'callID',
    },
    comProps: {
      options: calledList,
    },
  };
};

export const useIdentityForm = props => {
  const { messages } = props;

  const { data: identityList } = useHttp(getIdentity, {
    format: data => {
      console.log(' data ： ', data); //
      return data.map(v => ({
        label: v.titleName,
        value: v.id,
      }));
    },
  });
  console.log(' identityList ： ', identityList, props); //

  return {
    formType: 'Radio',
    itemProps: {
      label: messages.userCenter.identity,
      label: '',
      name: 'titleID',
    },
    comProps: {
      className: 'lrRadioCol',
      options: identityList,
    },
  };
};
