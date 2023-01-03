import React, { useEffect } from 'react';
import './style.less';
import { useIntl, useModel } from 'umi';
import SearchKwForm from '@/components/Form/SearchKwForm';
import RegisterCountTable from './RegisterCountTable';

const RegisterCount = props => {
  const { messages } = useIntl();
  const {
    registerCountTotal,
    registerCountList,
    getRegisterCountListAsync,
  } = useModel('admin');

  useEffect(() => {
    getRegisterCountListAsync();
  }, []);

  const onFieldChange = params => {
    console.log(' onFieldChange ： ', params); //
  };

  const customConfig = {
    comProps: {
      placeholder: messages.registerCount.searchPh,
    },
  };

  const tableProps = {
    // onSelectChange: props.onSelectChange,
    messages,
    dataSource: registerCountList,
    count: registerCountTotal,
    getListAsync: getRegisterCountListAsync,
    // getListAsync: (p) => getRegisterCountListAsync({
    //   ...p,
    //   per_page: 3
    // }),
  };
  return (
    <div className="adminBg">
      <div className="adminContent">
        <div className="wrap1000">
          <div className="pagesTitle">
            {messages.registerCount.title}
            <SearchKwForm
              className={'fje'}
              onFieldChange={onFieldChange}
              keyword={'keyword'}
              label={'名称'}
              noLabel
              customConfig={customConfig}
            ></SearchKwForm>
          </div>
          <RegisterCountTable
            // messages={messages}
            // dataSource={registerCountList}
            {...tableProps}
          ></RegisterCountTable>
        </div>
      </div>
    </div>
  );
};

export default RegisterCount;
