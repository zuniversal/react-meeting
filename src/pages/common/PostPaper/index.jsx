import React from 'react';
import './style.less';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import SmartFormModal from '@/common/SmartFormModal';
import ResultModal from '@/components/Modal/ResultModal';
import PostPaperForm from './PostPaperForm';
import { meetingThemeConfig } from './config';

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

const titleMap = {
};

const DowntTpl = ({ messages }) => (
  <div className="activeLinkWrapper">
    <div className="activeLink">{messages.postPaper.downloadTpl}</div>
    <div className="activeLink">{messages.postPaper.downloadAuth}</div>
  </div>
);

const ImportantDate = ({ messages }) => {
  return (
    <div className="importantDate">
      {meetingThemeConfig.map((v, i) => (
        <div key={i} className="importantDateRow">
          <div className="dayBox">{i}</div>
          <div className="dayInfo">
            <div className="">{messages.postPaper.downloadTpl}</div>
            <div className="">{messages.postPaper.downloadTpl}</div>
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
  const { isShowCommonModal, setIsShowCommonModal } = useModel('postPaper');
  const common = {
    isShowCommonModal,
    visible: isShowCommonModal,
    closeCommonModal: () => {
      setIsShowCommonModal(false)
    },
  }
  const resultModalProps = {
    modalProps: {
      visible: isShowCommonModal,
      header: null,  
      title: '',
      onCancel: () => {
        setIsShowCommonModal(false)
      },
    },
    resProps: {
    },   
  }

  const onSubmit = params => {
    console.log('onSubmit 提交 : ', params, props);
    setIsShowCommonModal(true)
    // loginAsync(params);
  };

  const content = (
    <PostPaperForm name="form" onSubmit={onSubmit} messages={messages}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
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
        <Button size="small" onClick={onSubmit}>
          {messages.postPaper.confirmPost}
        </Button>
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
      <div className="bottomBg"></div>
      {/* <CommonModal common={common}></CommonModal> */}
      <ResultModal {...resultModalProps}></ResultModal>
    </div>
  );
};

export default PostPaper;
