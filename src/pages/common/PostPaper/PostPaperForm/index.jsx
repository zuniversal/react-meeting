import React from 'react';
import { Form, Checkbox } from 'antd';
import { useIntl } from 'umi';
import SmartForm from '@/common/SmartForm';

const PostPaperForm = props => {
  const { messages } = useIntl();

  const config = [
    {
      itemProps: {
        label: messages.postPaper.password,
        name: 'password',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.postTitle,
        name: 'postTitle',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.postAuth,
        name: 'postAuth',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.postCommonAuthor,
        name: 'postCommonAuthor',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.company,
        name: 'company',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.artType,
        name: 'artType',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.uploadPost,
        name: 'uploadPost',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.uploadDoc,
        name: 'uploadDoc',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.uploadAuthFile,
        name: 'uploadAuthFile',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.uploadPdf,
        name: 'uploadPdf',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      itemProps: {
        label: messages.postPaper.confirmPost,
        name: 'confirmPost',
      },
      comProps: {
        className: 'formItem',
      },
    },
  ];

  return (
    <SmartForm
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default PostPaperForm;
