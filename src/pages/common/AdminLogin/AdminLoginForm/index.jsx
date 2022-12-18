import React from 'react';
import './style.less';
import { Form, Checkbox } from 'antd';
import { history, useIntl } from 'umi';
import SmartForm from '@/common/SmartForm';

const AdminLoginForm = props => {
  const { messages } = useIntl();

  const goPage = path => {
    history.push(path);
  };

  const checkboxData = [{ label: '', value: 1 }];

  const config = [
    {
      itemProps: {
        label: messages.login.emailAddr,
        name: 'email',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      formType: 'Password',
      itemProps: {
        label: messages.login.password,
        name: 'password',
      },
      comProps: {
        className: 'formItem',
      },
    },
    {
      noRule: true,
      formType: 'Checkbox',
      checkboxData: checkboxData,
      itemProps: {
        label: '',
        name: 'approver',
        className: 'approverCheckbox',
      },
      comProps: {
        className: 'rememberItem',
      },
      extra: messages.admin.approverTips,
    },
    <Form.Item
      key="remember"
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
      className={'formItems rememberItem'}
    >
      <Form.Item
        name="remember"
        valuePropName="checked"
        className={'formItems rememberItem'}
      >
        <Checkbox>{messages.login.remember}</Checkbox>
      </Form.Item>
      <Form.Item>
        <span className="findPwd" onClick={() => goPage('forgetPwd')}>
          {messages.login.findPwd}
        </span>
      </Form.Item>
    </Form.Item>,
  ];

  return (
    <SmartForm
      className="adminLoginForm"
      layout={'vertical'}
      noLabelLayout
      config={config}
      {...props}
    ></SmartForm>
  );
};

export default AdminLoginForm;
