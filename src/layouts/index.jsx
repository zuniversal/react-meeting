import React from 'react';
import './style.less';
import { useModel } from 'umi';
import Header from './Header';

const Layouts = props => {
  console.log(' Layouts       ： ', props);
  // const userModel = useModel()
  // console.log(' userModel ： ', userModel,  )//
  // useEffect(() => {
  // }, [])
  return (
    <div className="content">
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layouts; //
