import React, { useState, useEffect } from 'react';
import './style.less';
import PageTitle from '@/components/Widgets/PageTitle';
import { RemoveModal } from '@/components/Modal/ResultModal';
import { noShowTitlePath } from '@/configs';
import { isDev } from '@/constants';
import { tips } from '@/utils';
import { commonActions } from '@/models/common';
import { connect } from 'umi';

/* 
  封装的 通用 业务高阶组件 可选择性使用封装的方法  统一自动处理相关操作 简化重复逻辑的编写 
  支持 注入 actions, titleMap, noMountFetch, isCheckQuery,  等配置参数 
  actions：注入的 models 里封装的相应操作页面的 action 
  titleMap：模态框的标题映射
   
  
*/

const getAuth = (authInfo = {}, authKey = '') => {
  const authData = authInfo[authKey];
  console.log(' authData ： ', authData); //
  if (authData && Object.keys(authData).length) {
    if (false) {
      // if (isDev) {
      const devAuth = {};
      Object.keys(authData).forEach(v => (devAuth[v] = true));
      return devAuth;
    }
    return authData;
  } else {
    return {};
  }
  // if (isDev) {
  //   if (authInfo[authKey] && Object.keys(authInfo[authKey]).length) {
  //     const devAuth = {};
  //     Object.keys(props).forEach(v => (devAuth[v] = true));
  //     return devAuth
  //   } else {
  //     return authData

  //   }
  //   console.log(
  //     ' artHoc 组件 t handleAuth ： ',
  //     props,
  //     Object.keys(props),
  //     authInfo,
  //   );
  //   return authInfo;
  // } else {
  //   return authData ? authData : {}
  // }
};

const handleAuth = (props = {}) => {
  if (isDev) {
    const authInfo = {};
    Object.keys(props).forEach(v => (authInfo[v] = true));
    // console.log(
    //   ' artHoc 组件 t handleAuth ： ',
    //   props,
    //   Object.keys(props),
    //   authInfo,
    // );
    return authInfo;
  } else {
    return props;
  }
};

export default ({
  actions,
  titleMap,
  noMountFetch,
  isCheckQuery,
  noCreateActions,
  noConnectCommon,
  getListParams,
}) => Com => {
  const SmartHelpHOC = props => {
    const { location, authInfo, route } = props;
    const authData = getAuth(authInfo, route.authKey);
    const [selectedInfo, setSelectedInfo] = useState({
      selectedRowKeys: [],
      selectedRows: [],
    });
    const { selectedRowKeys, selectedRows } = selectedInfo;
    const [isBatch, setIsBatch] = useState(false);
    const [isShowRemoveModal, setIsShowRemoveModal] = useState(false);
    const [removeParams, setRemoveParams] = useState({});

    const [isShowTitle, setIsShowTitle] = useState(true);
    const toggleShowTitle = () => {
      console.log(' toggleShowTitle   ,   ： ', isShowTitle);
      setIsShowTitle(!isShowTitle);
    };
    const [pageTitle] = useState(() => {
      const { route } = props;
      const { path, title } = route;
      const isInclude = noShowTitlePath.every(v => v != path);
      return isInclude ? title : false;
    });
    const [actionProps] = useState(() => {
      let actionProps = {};
      if (!noCreateActions) {
        const actionsObj = {
          ...commonActions,
        };
        Object.keys(actionsObj).forEach(
          key =>
            (actionProps[key] = params =>
              props.dispatch(actionsObj[key](params))),
        );
      }
      return actionProps;
    });

    console.log(
      ' SmartHelpHOC ： ',
      pageTitle,
      actions,
      props,
      selectedInfo,
      selectedRowKeys,
      selectedRows,
      isBatch,
      isShowRemoveModal,
      removeParams,
      isShowTitle,
    );

    const removeAction = params => {
      console.log(' removeAction ： ', params, props);
      const resetState = {
        isShowRemoveModal: false,
      };
      if (isBatch) {
        setSelectedInfo({
          selectedRowKeys: [],
          selectedRows,
        });
        props.removeItemsAsync(params ? params : selectedRowKeys);
      } else {
        props.removeItemAsync(params);
      }
      console.log('  params ：', params, resetState);
      setIsShowRemoveModal(resetState.isShowRemoveModal);
    };

    const onRemove = (removeParams, isBatch) => {
      console.log(
        '  调用删除确认弹框  onRemove ： ',
        removeParams,
        isBatch,
        props,
      );
      setIsShowRemoveModal(true);
      setIsBatch(isBatch);
      setRemoveParams(removeParams);
    };
    const onBatchRemove = params => {
      console.log(' onBatchRemove ： ', params, props);
      if (selectedRowKeys.length) {
        // onRemove(selectedRowKeys, true);
        onRemove(params, true);
      } else {
        tips('请先勾选删除项再删除！', 2);
      }
    };
    const onResultModalOk = e => {
      console.log(' onResultModalOk   e,  ,   ： ', e);
      // tips('删除成功！');
      removeAction(removeParams);
    };
    const onResultModalCancel = e => {
      console.log(' onResultModalCancel   e, ,   ： ', e);
      setIsShowRemoveModal(false);
      setIsBatch(false);
      setRemoveParams({});
    };
    const renderRemoveModal = params => {
      const { removeTitle = 'Delete confirm' } = removeParams;

      const modalProps = {
        title: removeTitle,
        show: isShowRemoveModal,
        onOk: onResultModalOk,
        onCancel: onResultModalCancel,
      };
      const resProps = {
        okFn: removeParams.okFn
          ? removeParams.okFn
          : !removeParams.noRemove
          ? onResultModalOk
          : onResultModalCancel,
        offFn: onResultModalCancel,
        removeContent: removeParams.removeContent,
      };

      return (
        <RemoveModal modalProps={modalProps} resProps={resProps}></RemoveModal>
      );
    };

    const onSelectChange = (selectedRowKeys, selectedRows) => {
      console.log(
        ' onSelectChange ： ',
        selectedRowKeys,
        selectedRows,
        selectedInfo,
        props,
      );

      setSelectedInfo({
        selectedRowKeys,
        selectedRows,
      });
    };

    const getList = (params = {}) => {
      props.getListAsync(params);
    };
    const checkQuery = e => {
      if (location) {
        const { query } = location;
        console.log('    checkQuery ： ', e, props, query);
        if (Object.keys(query).length) {
          props.getListAsync(query);
        }
      }
    };
    const search = async params => {
      console.log('    search ： ', params);
      const { form } = params;
      try {
        const res = await form.validateFields();
        console.log('  search res await 结果  ：', res);
        getList(res);
      } catch (error) {
        console.log(' search error ： ', error);
      }
    };
    useEffect(() => {
      if (!noMountFetch) {
        getList(getListParams);
      }
      if (isCheckQuery) {
        checkQuery();
      }
    }, []);

    console.log(' SmartHelpHOC 组件 this.props ：', props);

    return (
      <div className="smartHelpHOCWrapper">
        {isShowTitle && <PageTitle {...props} title={pageTitle}></PageTitle>}

        <Com
          {...props}
          {...actionProps}
          // authInfo={handleAuth(authInfo, route.authKey)}
          // authInfo={authInfo[route.authKey]}
          authInfo={authData}
          // authInfo={{
          //   module: true,
          //   describe: true,
          //   create: true,
          //   edit: true,
          //   delete: true,}}
          selectedInfo={selectedInfo}
          onRemove={onRemove}
          onBatchRemove={onBatchRemove}
          onSelectChange={onSelectChange}
          search={search}
          onResultModalCancel={onResultModalCancel}
        />

        {renderRemoveModal()}
      </div>
    );
  };
  if (noConnectCommon) {
    // if (true) {
    return SmartHelpHOC;
  } else {
    return connect(({ common, user = {} }) => ({
      common,
      authInfo: user.authInfo,
    }))(SmartHelpHOC);
  }
};
