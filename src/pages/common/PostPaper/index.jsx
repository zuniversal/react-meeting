import React from 'react';
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
      href="/api/download/paperTpl.docx"
      download={'paperTpl.docx'}
    >
      {messages.postPaper.downloadTpl}
    </a>
    <a
      className="activeLink"
      href="/api/download/paperAuth.pdf"
      download={'paperAuth.pdf'}
    >
      {messages.postPaper.downloadAuth}
    </a>
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
  const {
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
  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
    // addPostAsync(params);
    const res = formatData({
      ...formProps.values,
      firstName: '',
      secondName: '',
      // paperURL: '/paperURL',
      // copyrightFileURL: '/copyrightFileURL',
    });
    const res2 = {
      commonAuthor: '论文共同作者',
      company: '单位名称',
      contactAuthor: '论文通讯作者',
      copyrightFileURL: '0ea005ef712f227010e10332a6208626fb056691.pdf',
      file: null,
      firstName: '',
      paperURL: 'd210dd9779f6d56ed54f5748a68f21be37b34176.doc',
      secondName: '',
      submitPaperCateID: 2,
      title: '论文标题',
    };
    console.log('  res2 ：', res2); //
    // addPostAsync(res2);
    addPostAsync(res);
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
    <PostPaperForm name="form" onSubmit={onSubmit} messages={messages}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn bigBtn">
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
