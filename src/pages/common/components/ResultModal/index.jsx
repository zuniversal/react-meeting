import React from 'react';
import './style.less';
import { useIntl } from 'umi';
import { Button, Form, Result } from 'antd';
import SmartModal from '@/common/SmartModal';
import succ from '@/static/img/common/succ.png';
import fail from '@/static/img/common/fail.png';

const statusImgMap = {
  succ,
  fail,
}

const ResultModal = props => {
  const [form] = Form.useForm();
  console.log(' ResultModal ： ', props, form);
  const {
    show,
    onOk,
    onCancel,
    onSubmit,
    onFail,
    modalProps,
    resProps,
    children,
  } = props;

  const { status = 'succ', okText, cancelText, okFn, offFn } = resProps;

  const btnCom = (
    <div className="dfc">
      {cancelText && <Button onClick={offFn}>{cancelText}</Button>}
      {okText && (
        <Button type="primary" onClick={okFn}>
          {okText}
        </Button>
      )}
    </div>
  );

  const statusMap = {
    succ: 'succ',
    error: 'error',
    warn: 'warn',
  }[status];

  // console.log(' statusMap ： ', statusMap, status);

  return (
    <SmartModal
      width={'400px'}
      footer={null}
      className={`resultModal ${statusMap} `}
      {...modalProps}
    >
      {/* <Result
        // status={statusMap}
        // subTitle="subTitle"
        {...resProps}
      >
      </Result> */}
      <img src={statusImgMap[props.statusImg]} className="statusIcon" />
      {children}

      {(okText || cancelText) && btnCom}
    </SmartModal>
  );
};

ResultModal.defaultProps = {
  modalProps: {},
  resProps: {},
  statusImg: 'succ',  
};

export default ResultModal;

export const SuccModal = props => {
  const { messages } = useIntl();
  console.log(' SuccModal ： ', props);
  return <ResultModal {...props}></ResultModal>;
};
