import React from 'react';
import useHttp from '@/hooks/useHttp';
import {
  getCalledList,
  getIdentityList,
  getPaperCateList,
  getHotelList,
} from '@/services/common';
import {
  calledConfig as calledList,
  identityConfig as identityList,
  // paperTypeConfig as paperTypeList,
} from '@/configs';

export const useCalledForm = props => {
  const { messages } = props;

  // const { data: calledList } = useHttp(getCalledList, {
  //   format: data =>
  //     data.map(v => ({
  //       label: v.callName,
  //       value: v.id,
  //     })),
  // });
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

  // const { data: identityList } = useHttp(getIdentityList, {
  //   format: data => {
  //     console.log(' data ： ', data); //
  //     return data
  //       .filter(v => v.id != 1)
  //       .map(v => ({
  //         label: v.titleName,
  //         value: v.id,
  //       }));
  //   },
  // });
  console.log(' identityList ： ', identityList, props); //

  return {
    formType: 'Radio',
    itemProps: {
      label: messages.userCenter.identity,
      // label: '',
      name: 'titleID',
    },
    comProps: {
      // className: 'lrRadioCol',
      options: identityList,
    },
  };
};

export const usePaperTypeForm = props => {
  const { messages } = props;

  const { data: paperTypeList } = useHttp(
    () => getPaperCateList({ page: 1, per_page: 20 }),
    {
      format: data => {
        return data.map(v => ({
          // label: v.submitPaperCateName,
          label: v.paperCateName,
          value: v.id,
        }));
      },
    },
  );
  console.log(' paperTypeList ： ', paperTypeList, props); //

  return {
    formType: 'Select',
    itemProps: {
      label: messages.postPaper.artType,
      name: 'paperCateID',
    },
    comProps: {
      className: 'formItem',
      options: paperTypeList,
    },
  };
};

export const useHotelForm = props => {
  const { messages } = props;

  const { data: hotelList } = useHttp(getHotelList, {
    format: data => {
      return data.map(v => ({
        ...v,
        label: v.hotelName,
        value: v.id,
      }));
    },
  });

  return {
    formType: 'Select',
    itemProps: {
      label: messages.postPaper.artType,
      name: 'hotelName',
    },
    comProps: {
      className: 'formItem',
      options: hotelList,
    },
  };
};
