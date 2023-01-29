import React from 'react';
import SmartTable from '@/common/SmartTable';
import { downLoad } from '@/utils';
import { downUrlKeys } from '../config';
import {
  deletePaperConfig,
  noOpnionConfig,
  submitPaperConfig,
  submitRevisionConfig,
} from '@/configs';
import SmartUpload from '@/components/Widgets/SmartUpload';
import { DOC_TYPE } from '@/constants';

const batchDown = (data, urlKeys = downUrlKeys) =>
  urlKeys.filter(k => data[k]).map(k => downLoad(data[k], { name: data[k] }));

const PaperStatusTable = props => {
  const { messages } = props; //
  const columns = [
    {
      title: messages.paperStatus.no,
      dataIndex: 'paperID',
    },
    {
      title: messages.paperStatus.paperTitle,
      dataIndex: 'title',
    },
    {
      title: messages.paperStatus.paperType,
      dataIndex: 'paperCate',
    },
    {
      title: messages.paperStatus.approvalStatus,
      dataIndex: 'sumResult',
    },
    {
      title: messages.paperStatus.stage,
      dataIndex: 'paperEG',
    },
    {
      title: messages.paperStatus.adviseText,
      dataIndex: 'adviseText',
      // detailFn: record =>
      //   props.showAdviseText({
      //     action: 'showAdviseText',
      //     d_id: record.customer_id,
      //     record,
      //   }),
      render: (text, record, index, config) => {
        // return null;
        return (
          (record.sumResult.includes('通过') ||
            record.sumResult.includes('修改')) && (
            <a
              onClick={() =>
                props.showAdviseText({
                  action: 'showAdviseText',
                  d_id: record.customer_id,
                  record,
                })
              }
            >
              {messages.paperStatus.adviseText}
            </a>
          )
        );
      },
    },
    {
      title: messages.paperStatus.adviseFile,
      dataIndex: 'adviseFile',
      render: (text, record, index, config) => {
        return (
          (record.sumResult.includes('通过') ||
            record.sumResult.includes('修改')) &&
          downUrlKeys.filter(k => record[k]).length > 0 && (
            <a onClick={() => batchDown(record)}>
              {messages.paperStatus.adviseFile}
            </a>
          )
        );
      },
    },
    {
      title: messages.paperStatus.submitTime,
      dataIndex: 'submitTime',
    },
  ];

  const extra = (text, record, index, props) => {
    const uploadEditedPaperProps = {
      finish: e => props.uploadEditedPaper(e, record),
      accept: DOC_TYPE,
    };
    const uploadEditedRevisionProps = {
      finish: e => props.uploadEditedRevision(e, record),
      accept: DOC_TYPE,
    };
    return (
      <>
        {[
          deletePaperConfig.includes(record.sumResult) ||
            record.sumResult.includes('不通过'),
        ] && (
          <a
            onClick={() => {
              props.remove({
                action: 'remove',
                record,
              });
            }}
          >
            {messages.delete}
          </a>
        )}
        <a onClick={() => downLoad(record.paperURL, { name: record.paperURL })}>
          {messages.check}
        </a>
        {submitPaperConfig.includes(record.sumResult) && (
          <SmartUpload {...uploadEditedPaperProps}>
            <a className="uploadLink">
              {messages.paperStatus.uploadEditedPaper}
            </a>
          </SmartUpload>
        )}
        {submitRevisionConfig.includes(record.sumResult) && (
          <SmartUpload {...uploadEditedRevisionProps}>
            <a className="uploadLink">
              {messages.paperStatus.uploadEditedRevision}
            </a>
          </SmartUpload>
        )}
        {/* <SmartUpload {...uploadEditedRevisionProps}>
          <a className="uploadLink">
            {messages.paperStatus.uploadEditedPaper}
          </a>
        </SmartUpload> */}
      </>
    );
  };

  return (
    <SmartTable
      columns={columns}
      extra={extra}
      noDefault
      {...props}
    ></SmartTable>
  );
};

export default PaperStatusTable;
