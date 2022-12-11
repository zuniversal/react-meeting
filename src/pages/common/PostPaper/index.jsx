import React from 'react';
import './style.less';
import { Form, Button } from 'antd';
import { useIntl, useModel } from 'umi';
import PostPaperForm from './PostPaperForm';

const PostPaper = props => {
  const intl = useIntl();
  const { messages } = intl;
  console.log(' PostPaper   msg,   ： ', intl, messages);
  const { loginAsync } = useModel('users');
  console.log(' loginAsync ： ', loginAsync);
  const onSubmit = params => {
    console.log('onSubmit 提交 : ', params, props);
    // loginAsync(params);
  };

  const content = (
    <PostPaperForm name="form" onSubmit={onSubmit}>
      <Form.Item className={`btnFormItem`} noStyle>
        <Button type="primary" htmlType="submit" className="actionBtn">
          {messages.confirm}
        </Button>
      </Form.Item>
    </PostPaperForm>
  );

  return (
    <div className="postPaper">
      <div className="postPaperContent">
        <div className="title">{messages.postPaper.psot}</div>
        <div className="">
          <div className="">{messages.postPaper.psot}</div>
        </div>
        {content}
      </div>
      <div className="bottomBg"></div>
    </div>
  );
};

export default PostPaper;
