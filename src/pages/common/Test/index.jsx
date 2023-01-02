import React from 'react';
import './style.less';
import TestForm from './TestForm'; //

const Exhibition = props => {
  const formState = {
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxx: '其它属性',
    customCom: 'CustomComzyb',
    formItemInput: 888,
    text: 'texttexttext',
    radioGroup2: 'b',

    input: '15160208888',
    inputNumber: 8,
    password: '666666',
    textarea: 'textarea888',
    select: 'select2',
    search: ['select2'],
    switch: true,
    radio: 'b',
    radioGroup: 'b',
    checkbox: ['a', 'b'],
    // datePicker: undefined,
    // monthPicker: undefined,
    // rangePicker: undefined,
    rate: 2.5,
    slider: 80,
    cascader: ['zhejiang', 'hangzhou', 'xihu'],
    autoComplete: 'Downing Street',
    treeSelect: 'parent 1-0',
  };

  return (
    <div className="exhibition">
      <TestForm init={formState}></TestForm>
    </div>
  );
};

export default Exhibition;
