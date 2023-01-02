import React from 'react';
import SmartForm from '@/common/SmartForms';
import { Form, Input, Button, InputNumber, Tag } from 'antd';
import { dataConfig } from '@/common/SmartForms/data';
import { SearchForm } from '@/common/SmartForms';

let varLabel = 'varLabel';

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const TestForm = props => {
  // console.log(' TestForm ： ', props); //
  setTimeout(() => {
    varLabel = '动态Label';
  }, 5000);

  const config = ({ formState }) => [
    ...dataConfig,
    {
      formType: 'Search',
      itemProps: {
        label: varLabel,
        name: 'searchTest',
      },
      comProps: {
        mode: 'multiple',
        tagRender: p => {
          console.log(' tagRender p ： ', p); //
          return (
            <Tag color="orange" style="margin-right: 3px">
              {p.label}
            </Tag>
          );
        },
        options: [
          {
            label: '客户',
            value: '客户',
          },
          {
            label: '业务员',
            value: '业务员',
          },
        ],
      },
    },
    {
      noRule: true,
      formType: 'CustomCom',
      CustomCom: <div>自定义组件</div>,
      children: (
        <>
          <div>自定义组件children</div>
          <Form.Item name="customcom">
            <Input />
          </Form.Item>
        </>
      ),
      itemProps: {
        label: 'CustomCom',
        name: 'customCom',
      },
    },
    <div className="divCom">
      vnode
      <Tag color="red">red</Tag>
    </div>,
    <Form.Item
      name="formItemInput"
      label="formItemInput"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Form.Item name="formItemInput">
        <InputNumber min="1" max="10" />
      </Form.Item>
    </Form.Item>,
    <Form.Item name="text" label="text">
      <span className="ant-form-text">texttext</span>
    </Form.Item>,
  ];

  const onSubmit = formProps => {
    console.log('onSubmit 提交 : ', formProps, props);
  };

  const topBottomCom = {
    top: <div style={{ textAlign: 'center' }}>父组件传递 top</div>,
    bottom: <div style={{ textAlign: 'center' }}>父组件传递 bottom</div>,
  };
  return (
    <SmartForm
      className={`dcForm`}
      layout={'vertical'}
      noLabelLayout
      config={config}
      onSubmit={onSubmit}
      formLayout={formItemLayout}
      {...topBottomCom}
      {...props}
    >
      <Button type="primary" className="bigBtn" htmlType="submit">
        提交
      </Button>
    </SmartForm>
  );
};

// const TestForm3 = props => {
//   // console.log(' TestForm ： ', props); //
//   const { beforeExtra, className, keyword, customConfig } = props;
//   const onSubmit = formProps => {
//     console.log('onSubmit 提交 : ', formProps, props);
//   };
//   const getList = params => {
//     console.log(' getList   params,   ： ', params);
//   };
//   const config = [
//     {
//       noLabel: props.noLabel,
//       itemProps: {
//         label: props.label,
//         name: keyword,
//       },
//       searchSuffix: true,
//       ...customConfig,
//     },
//   ];
//   return (
//     <SearchForm
//       getList={getList}
//       config={config}
//       noRuleAll
//       formLayout={formItemLayout}
//       {...props}
//     ></SearchForm>
//   );
//   return (
//     <SmartForm
//       noLabelLayout
//       config={config}
//       onSubmit={onSubmit}
//       // formLayout={formItemLayout}
//     >
//       <Button type="primary" className="bigBtn" htmlType="submit">
//         提交
//       </Button>
//     </SmartForm>
//   );
// };

TestForm.defaultProps = {
  label: '',
  className: null,
  keyword: 'keyword',
};

export default TestForm;
