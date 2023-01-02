import React, { useState } from 'react';

export const useModal = props => {
  const [isShowCommonModal, setIsShowCommonModal] = useState(false);
  const [action, setAction] = useState('');
  const [extraData, setExtraData] = useState(null);

  const closeCommonModal = () => {
    console.log(' closeCommonModal ： '); //
    setIsShowCommonModal(false);
  };

  const common = {
    extraData,
    action,
    isShowCommonModal,
    visible: isShowCommonModal,
    closeCommonModal,
  };

  const showModal = params => {
    console.log(' showModal ： ', params); //
    setIsShowCommonModal(true);
    setAction(params.action);
    setExtraData(params);
  };

  return {
    isShowCommonModal,
    closeCommonModal,
    setIsShowCommonModal,
    setAction,
    showModal,
    action,
    extraData,
    common,
  };
};
