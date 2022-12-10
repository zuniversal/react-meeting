import React from 'react';
import ReactSeamlessScroll from 'react-seamless-scroll';

const Broadcast = React.memo(props => {
  return (
    <ReactSeamlessScroll
      style={{ height: '100px' }}
      speed={10} //60	每秒/px
      // reverse={true}
      mode={'vertical'}
    >
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {props.children}
    </ReactSeamlessScroll>
  );
});

export default Broadcast;
