import React, { useEffect } from 'react';
import './style.less';
import { useIntl } from 'umi';

const PayFragment = ({ msg, data }) => {
  // useEffect(() => {
  //   // const formFragment = '';
  //   const formFragment = localStorage.getItem('form');
  //   // const formFragment = "console.log(' 22 ： ', 11111111);";
  //   console.log(' formFragment ： ', formFragment);
  //   const scriptElement = document.createElement('script');
  //   scriptElement.innerHTML = formFragment;
  //   document.body.appendChild(scriptElement);
  // }, []);

  // return <div />;
  useEffect(() => {
    console.log(' 渲染 ： ');
    document.forms[0].submit();
  }, []);

  return (
    <div
      className="payFragment"
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    ></div>
  );
};

const Pay = props => {
  const { messages } = useIntl();
  const formFragment = localStorage.getItem('form');
  // const formFragment = "console.log(' 22 ： ', 11111111);";
  console.log(' formFragment ： ', formFragment);
  return (
    <div className="pay">
      <div className="conWrapper">
        {/* <div className="title">{messages.pay.pay}</div> */}
        <PayFragment msg={messages.pay} data={formFragment}></PayFragment>
        {/* <PayFragment msg={messages.pay}></PayFragment> */}
      </div>
    </div>
  );
};

export default Pay;
