import React, { useState } from 'react';

export const useModal = props => {
  const [isShowCommonModal, setIsShowCommonModal] = useState(false);
  const [action, setAction] = useState('');

  const common = {
    action,
    isShowCommonModal,
    visible: isShowCommonModal,
    closeCommonModal: () => {
      console.log(' closeCommonModal ： '); //
      setIsShowCommonModal(false);
    },
  };

  const showModal = params => {
    console.log(' showModal ： ', params); //
    setIsShowCommonModal(true);
    setAction(params);
  };

  return {
    isShowCommonModal,
    setIsShowCommonModal,
    action,
    setAction,
    showModal,
    common,
  };
};
