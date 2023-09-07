import React, { useState } from 'react';
import './style.less';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import SmartFormModal from '@/common/SmartFormModal';
// import { SuccModal } from '../components/ResultModal';
import ResultModal from '../components/ResultModal';
import PostPaperForm from './PostPaperForm';
import { meetingThemeConfig, importantDateConfig } from './config';
import { formatData } from './format';
import bottomImg from '@/static/img/postPaper/bg.png';
import { noUserActionRole } from '@/configs';

const PostSucc = ({ messages }) => (
  <div className="activeLinkWrapper">
    <div className="activeLink">PostSucc</div>
  </div>
);

const PostFail = ({ messages }) => (
  <div className="activeLinkWrapper">
    <div className="activeLink">PostFail</div>
  </div>
);

const detailFormMap = {
  postSucc: PostSucc,
  postFail: PostFail,
};

const titleMap = {};

const DowntTpl = ({ messages }) => (
  <div className="activeLinkWrapper">
    <a
      className="activeLink"
      href="/api/downloads/Paper_template_STABS2024.pdf"
      download={'Paper_template_STABS2024.pdf'}
    >
      {messages.postPaper.downloadPaper}
    </a>
    <a
      className="activeLink"
      href="/api/downloads/Paper_template_STABS2024.doc"
      download={'Paper_template_STABS2024.doc'}
    >
      {messages.postPaper.downloadTpl}
    </a>
    {/* <a
      className="activeLink"
      href="/api/downloads/paperAuth.pdf"
      download={'paperAuth.pdf'}
    >
      {messages.postPaper.downloadAuth}
    </a> */}
  </div>
);

const ImportantDate = ({ messages }) => {
  return (
    <div className="importantDate">
      {importantDateConfig.map((v, i) => (
        <div key={i} className="importantDateRow">
          <div className="dayBox">0{i + 1}</div>
          <div className="dayInfo">
            <div className="">{v.label}</div>
            <div className="">{v.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CommonModal = props => {
  const DetailForm = detailFormMap[props.common?.action];
  return (
    <SmartFormModal
      show={props.common?.isShowCommonModal}
      action={props.common?.action}
      titleMap={titleMap}
      title={null}
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

const PostPaper = props => {
  const { messages } = useIntl();
  const { userInfo } = useModel('users');
  const [formKey, setFormKey] = useState(0);

  const isDisabled = noUserActionRole.includes(userInfo.titleID);
  const {
    isLoading,
    isShowCommonModal,
    setIsShowCommonModal,
    addPostAsync,
    getPaperListAsync,
    action,
  } = useModel('postPaper');
  const onSubmit2 = () => {
    console.log(' onSubmit2   ,   ： ');
    getPaperListAsync();
    setIsShowCommonModal(true);
  };
  const onSubmit = async formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    // addPostAsync(params);
    const params = formatData({
      ...formProps.values,
      firstName: '',
      secondName: '',
      submitPaperCateID: 1,
      noTipsAll: true,
      // paperURL: '/paperURL',
      // copyrightFileURL: '/copyrightFileURL',
    });
    const res = await addPostAsync(params);
    console.log('  res ：', res); //
    if (res.code == 200) {
      formProps.form.resetFields();
      setFormKey(formKey + 1);
    }
  };
  const common = {
    isShowCommonModal,
    visible: isShowCommonModal,
    closeCommonModal: () => {
      setIsShowCommonModal(false);
    },
  };
  const isSucc = true;
  // const isSucc = false;

  const succTip = (
    <div className="resultModal">
      <div className="resultTitle">{messages.postPaper.postSucc}</div>
      <div className="resultTip">{messages.postPaper.postSuccTip}</div>
    </div>
  );
  const failTip = (
    <div className="resultModal">
      <div className="resultTitle">{messages.postPaper.postFail}</div>
      <div className="resultTip">{messages.postPaper.postFailTip}</div>
    </div>
  );
  const resultModalProps = {
    modalProps: {
      show: true,
      visible: isShowCommonModal,
      header: null,
      title: null,
      // title: '',
      onCancel: () => {
        setIsShowCommonModal(false);
      },
    },
    resProps: {},
    children: action === 'succ' ? succTip : failTip,
    statusImg: action === 'succ' ? 'succ' : 'fail',
  };

  const content = (
    <PostPaperForm
      name="form"
      onSubmit={onSubmit}
      messages={messages}
      key={formKey}
    >
      <Form.Item className={`btnFormItem`} noStyle>
        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading || isDisabled}
          className="actionBtn bigBtn"
        >
          {messages.postPaper.confirmPost}
        </Button>
      </Form.Item>
    </PostPaperForm>
  );

  return (
    <div className="postPaper">
      <div className="conWrapper">
        <div className="title">{messages.postPaper.post}</div>
        {/* <div className="conWrapper"> */}
        <div className="postPaperFormWrapper">
          <DowntTpl messages={messages} />
          {content}
        </div>
        {/* <span onClick={onSubmit2}>{messages.postPaper.confirmPost}</span> */}
        {/* </div> */}
        <div className="">
          <div className="title importantDateTitle">
            {messages.postPaper.importantDate}
          </div>
          <div className="conWrapper">
            <ImportantDate messages={messages}></ImportantDate>
          </div>
        </div>
      </div>
      <div className="bottomBg">
        <img src={bottomImg} className="bottomImg" />
      </div>
      {/* <CommonModal common={common}></CommonModal> */}
      <ResultModal {...resultModalProps}></ResultModal>
    </div>
  );
};

export default PostPaper;
