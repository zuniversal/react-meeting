import React, { useEffect } from 'react';
import { Button } from 'antd';
import AlarmNotifySearchForm from '@/components/Form/AlarmNotifySearchForm';
import TemplateTable from '@/components/Table/TemplateTable';
import TemplateForm from '@/components/Form/TemplateForm';
import TemplateForm2 from '@/components/Form/TemplateForm2';
import SmartFormModal from '@/common/SmartFormModal';
import {
  actions,
  mapStateToProps,
  mapDispatchToProps,
} from '@/models/template';
import SmartHOC from '@/common/SmartHOC';
import SmartHelpHOC from '@/common/SmartHelpHOC';
import Scroll from './Scroll';
import Scroll3 from './Scroll3';
import { connect } from 'umi';

const TITLE = '用户';

const titleMap = {
  add: `新建${TITLE}`,
  edit: `编辑${TITLE}`,
  detail: `${TITLE}详情`,
  handleAlarm: `确认处理`,
  templateDetailAsync: `班组详情`,
};

const detailFormMap = {
  templateDetailAsync: TemplateForm2,
};
export const datas = [
  // 353.6,
  // 323.9,
  // 283.0,
  // 213.4,
  // 253.7,
  // 243.7,
  // 213.6,
  // 253.2,
  // 113.7,
  // 183.8,
  // 133.0,
  // 163.3,

  // 121.6,
  // 151.9,
  // 191.0,
  // 201.7,
  // 231.4,
  // 261.7,
  // 281.6,
  // 221.2,
  // 284.3,
  // 321.7,
  // 371.0,
  // 351.8,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
];

const Template = props => {
  console.log(' Template   ,   ： ', props);
  useEffect(() => {
    return;
    props.getListAsync({});
  }, []);

  const renderSearchForm = params => {
    const onBatchRemove = params => {
      console.log(' onBatchRemove    ： ', params, props);
      props.onBatchRemove({
        ids: props.selectedRowKeys,
      });
    };
    const renderFormBtn = params => {
      return (
        <div className={'btnWrapper'}>
          <Button
            type="primary"
            onClick={() => props.showFormModal({ action: 'add' })}
          >
            新增{TITLE}
          </Button>
          <Button
            type="primary"
            onClick={() =>
              props.showItemAsync({
                action: 'templateDetailAsync',
                d_id: '1',
              })
            }
          >
            新增
          </Button>
          <Button
            type="primary"
            // disabled={props.authInfo.delete !== true}
            onClick={onBatchRemove}
          >
            删除
          </Button>
        </div>
      );
    };

    const onFieldChange = params => {
      console.log(' onFieldChange,  , ： ', params);
      props.getListAsync(params.formData);
    };

    const formProps = {};

    return (
      <AlarmNotifySearchForm
        formBtn={renderFormBtn}
        init={props.searchInfo}
        onFieldChange={onFieldChange}
        {...formProps}
      ></AlarmNotifySearchForm>
    );
  };

  const renderTable = params => {
    console.log(' renderTable ： ', params, props); //
    const tableProps = {
      onSelectChange: props.onSelectChange,
      dataSource: props.dataList,

      count: props.count,
      authInfo: props.authInfo,
      searchInfo: props.searchInfo,
      getListAsync: props.getListAsync,
      showDetail: props.getItemAsync,
      edit: props.getItemAsync,
      showFormModal: props.showFormModal,
      showItemAsync: props.showItemAsync,
    };

    return <TemplateTable {...tableProps}></TemplateTable>;
  };

  const renderCommonModal = params => {
    const DetailForm = detailFormMap[props.common?.action];
    return (
      <SmartFormModal
        show={props.common?.isShowCommonModal}
        action={props.common?.action}
        titleMap={titleMap}
        onOk={props.closeCommonModal}
        onCancel={props.closeCommonModal}
      >
        {DetailForm && (
          <DetailForm
            init={props.common?.itemDetail}
            action={'detail'}
          ></DetailForm>
        )}
      </SmartFormModal>
    );
  };

  const renderModalContent = e => {
    const { action } = props;
    const formComProps = {
      action,
    };
    if (action !== 'add') {
      formComProps.init = props.itemDetail;
    }
    console.log(' formComProps ： ', formComProps);
    return <TemplateForm {...formComProps}></TemplateForm>;
  };

  const renderSmartFormModal = params => {
    const onOk = async params => {
      console.log(' onOkonOk ： ', params, props);
      const { action, itemDetail } = props;
      const { form, init } = params;
      if (['handleAlarm'].includes(action)) {
        props.onCancel({});
        return;
      }
      try {
        const res = await form.validateFields();
        console.log('  res await 结果  ：', res, action);
        if (action === 'add') {
          props.addItemAsync({
            ...res,
          });
        }
      } catch (error) {
        console.log(' error ： ', error);
      }
    };
    return (
      <SmartFormModal
        show={props.isShowModal}
        action={props.action}
        titleMap={titleMap}
        onOk={onOk}
        onCancel={props.onCancel}
      >
        {renderModalContent()}
      </SmartFormModal>
    );
  };
  {
    datas.map(v => <div key={v}>{v}</div>);
  }

  return (
    <div className="alarmNotify">
      {/* <Scroll>
        {datas.map(v => <div key={v}>{v}</div>)}
      </Scroll> */}
      <Scroll3>{renderTable()}</Scroll3>

      {renderSearchForm()}

      {renderTable()}

      {renderSmartFormModal()}

      {renderCommonModal()}
    </div>
  );
};
console.log(' mapDispatchToProps ： ', mapDispatchToProps); //
// export default Template;
// export default connect(mapStateToProps, mapDispatchToProps)(SmartHOC({
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  SmartHelpHOC({
    actions,
    titleMap,
  })(Template),
);
